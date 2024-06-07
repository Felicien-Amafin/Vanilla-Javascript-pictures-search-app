import { initializeApp } from 'firebase/app';
import { getFirestore,doc, setDoc, getDoc, arrayUnion, updateDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, 
signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { update } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCcWnL_SC90lEvWPPWEp6gxdKblxhyeq4g",
    authDomain: "pixavenue-eb1a0.firebaseapp.com",
    projectId: "pixavenue-eb1a0",
    storageBucket: "pixavenue-eb1a0.appspot.com",
    messagingSenderId: "336575541772",
    appId: "1:336575541772:web:8295abf33d95aae02b7429",
    measurementId: "G-8EJ24F8EYN"
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
            window.location.replace('../../dist/user.html');
        } catch(error) {
            const mess = error.code === 'auth/invalid-credential'? 'Invalid password or email address.': error.code;
            this.feedbackMess('errorList', mess);
            document.getElementById('formBtn').disabled = false;
        }
    }
    static feedbackMess(feedbackId, mess) {
        const feedback = document.getElementById(`${feedbackId}`);
        feedback.classList.remove('form__element--hidden');
        feedback.innerHTML = `${mess}`;
    }
    static async getUser(userId) {
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
        window.location.replace('../../dist/index.html'); 
    }
    static async createColl(sortedCollNames, collName, data, userId) {
        const docRef = doc(db, 'users', `${userId}`)
        //In database : update collectionsNames array in database
        await updateDoc(docRef, { "collectionsNames": sortedCollNames});
        //In database: Create a document in a collection named "collections" + assigned data to document
        await setDoc(doc(db, 'users', `${userId}`, 'collections', `${collName}`), { pictures: arrayUnion(data) });
    }
}