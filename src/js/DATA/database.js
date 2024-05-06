import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, 
signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

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
    static async sendSignUpCred(cred) {
        try {
            document.querySelector('.formBtn').disabled = true;
            const userCred = await createUserWithEmailAndPassword(auth, cred.emailAdress, cred.password);
            await sendEmailVerification(userCred.user);
            const mess = `Complete your sign up by clicking on the link sent at ${userCred.user.email}`;
            this.feedbackMess('validation', mess);
            await signOut(auth);
            document.querySelector('.formBtn').disabled = false;
        } catch(error) {
            const mess = error.code === 'auth/email-already-in-use'? 'This email address is already used!': error.code;
            this.feedbackMess('errorList', mess); 
            document.querySelector('.formBtn').disabled = false;
        }  
    }
    static async sendLoginCred(cred) {
        try {
            document.querySelector('.formBtn').disabled = true; 
            const userCred = await signInWithEmailAndPassword(auth, cred.emailAdress, cred.password);
            if(!userCred.user.emailVerified) {
                signOut(auth);
                const mess = 'Verify your email address before login!';
                this.feedbackMess('errorList', mess);
                document.querySelector('.formBtn').disabled = false;
                return;
            } 
            window.location.replace('../../dist/user.html'); 
        } catch(error) {
            const mess = error.code === 'auth/invalid-credential'? 'Invalid password or email address.': error.code;
            this.feedbackMess('errorList', mess);
            document.querySelector('.formBtn').disabled = false;
        }
    }
    static async sendRecoveryMail(emailAdressId) {
        try {
            const sendBtn = document.getElementById('pwdRecoveryBtn');
            sendBtn.disabled = true;
            const emailAdressVal = document.getElementById(`${emailAdressId}`).value;
            await sendPasswordResetEmail(auth, emailAdressVal);
            console.log(emailAdressVal)
            this.feedbackMess('confirmation', `A password recovery mail has been sent.`);
            sendBtn.disabled = false;
        } catch(error) {
            console.log(error.code)
            this.feedbackMess('errorField', error.code);
            document.getElementById('pwdRecoveryBtn').disabled = false;
        }
    }
    static feedbackMess(feedbackId, mess) {
        const feedback = document.getElementById(`${feedbackId}`);
        feedback.classList.remove('form__input--hidden');
        feedback.innerHTML = `${mess}`;  
    }
    static logOut() { 
        signOut(auth);
        window.location.replace('../../dist/index.html'); 
    }
}