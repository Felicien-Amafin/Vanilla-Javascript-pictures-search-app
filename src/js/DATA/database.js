import { initializeApp } from 'firebase/app';
import { getFirestore,doc, setDoc, getDoc, arrayUnion, arrayRemove, updateDoc, deleteDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, 
signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { User } from "../user";


const firebaseConfig = {
    apiKey: "AIzaSyCli4L6hauf3gs1Uy7-F53bX6sTpP8-YB0",
    authDomain: "pixavenue-cf23c.firebaseapp.com",
    projectId: "pixavenue-cf23c",
    storageBucket: "pixavenue-cf23c.appspot.com",
    messagingSenderId: "707421119131",
    appId: "1:707421119131:web:1e8b17b4138ac716b29c3e",
    measurementId: "G-XWP8J6E47E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export class Database {
    static async signUp(cred) {
        try {
            document.getElementById('formBtn').disabled = true;
            const userCred = await createUserWithEmailAndPassword(auth, cred.emailAdress, cred.password);
            await setDoc(doc(db, "users", userCred.user.uid), { 
                userName: `${cred.userName}`, 
                collectionsNames: [],
            });
            await sendEmailVerification(userCred.user);
            const mess = `Complete your sign up by clicking on the link sent at ${userCred.user.email}`;
            await signOut(auth);
            this.feedbackMess('validation', mess);
        } catch(error) {
            const mess = error.code === 'auth/email-already-in-use'? 'This email address is already used!': error.code;
            this.feedbackMess('errorList', mess); 
        }  
        document.getElementById('formBtn').disabled = false;
    }
    static async logIn(cred) {
        try {
            document.getElementById('formBtn').disabled = true; 
            const userCred = await signInWithEmailAndPassword(auth, cred.emailAdress, cred.password);
            if(!userCred.user.emailVerified) {
                signOut(auth);
                const mess = 'Verify your email address before login!';
                this.feedbackMess('errorList', mess);
                document.getElementById('formBtn').disabled = false;
                return;
            } 
            const docId = userCred.user.uid;
            sessionStorage.setItem('user', JSON.stringify(docId));
            const userId = JSON.parse(sessionStorage.getItem('user')); 
            this.getUser(userId) // Get user from firestore
            .then((userData)=> {
                User.unlockUserPage(userData, userId);
            })
        } catch(error) {
            const mess = error.code === 'auth/invalid-credential'? 'Invalid password or email address.': error.code;
            this.feedbackMess('errorList', mess);
            document.getElementById('formBtn').disabled = false;
        }
    }
    static feedbackMess(feedbackId, mess) {
        //Display feedback message after user has entered input
        const feedback = document.getElementById(`${feedbackId}`);
        feedback.classList.remove('form__element--hidden');
        feedback.innerHTML = `${mess}`;
    }
    static async getUser(userId) {
        //Get user data in firestore 
        try {
            const userRef= doc(db, "users", userId);
            const userSnap = await getDoc(userRef);
            const user = userSnap.exists() ? userSnap.data() : null;
            return user;
        } catch(error) { alert(error) }
    }
    static async sendRecoveryMail(emailAdressId) {
        try {
            const sendBtn = document.getElementById('pwdRecoveryBtn');
            sendBtn.disabled = true;
            const emailAdressVal = document.getElementById(`${emailAdressId}`).value;
            await sendPasswordResetEmail(auth, emailAdressVal);
            this.feedbackMess('confirmation', `A password recovery mail has been sent.`);
            sendBtn.disabled = false;
        } catch(error) {
            this.feedbackMess('errorField', error.code);
            document.getElementById('pwdRecoveryBtn').disabled = false;
        }
    }
    static logOut() { 
        signOut(auth);
        window.location.replace(`${location.href}`); 
    }
    static async createColl(sortedCollNames, collName, data, userId) {
        const docRef = doc(db, 'users', `${userId}`);
        //In firestore : update collectionsNames array 
        await updateDoc(docRef, { "collectionsNames": sortedCollNames});
        //In firestore: Create a document in a collection named "collections" + assigned data to document
        await setDoc(doc(db, 'users', `${userId}`, 'collections', `${collName}`), { pictures: arrayUnion(data) });
    }
    static async deleteColl(collectionsNames, collName, userId) {
        const docRef = doc(db, 'users', `${userId}`);
        //In firestore : update collectionsNames array
        await updateDoc(docRef, {"collectionsNames": collectionsNames});
        //Delete collection specified by user
        await deleteDoc(doc(db,'users', `${userId}`, 'collections', `${collName}`));
    }
    static async updateColl(data, collName, userId) {
        const docRef = doc(db, 'users', `${userId}`, 'collections', `${collName}`);
        //In firestore : update pictures array in collName doc
        await updateDoc(docRef, {"pictures": arrayUnion(data)});
    }
    static async getColl(collName, userId) {
        const docRef = doc(db, 'users', `${userId}`, 'collections', `${collName}`);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) { return docSnap.data(); }
    }
    static async deleteImg(data, collName, userId) {
        const docRef = doc(db, 'users', `${userId}`, 'collections', `${collName}`);
        //In firestore : update pictures array in collName doc
        await updateDoc(docRef, {"pictures": arrayRemove(data)});
    }
    
}