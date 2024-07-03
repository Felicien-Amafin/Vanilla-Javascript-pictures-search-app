import { Form } from "./form";
import { Database } from "../data/database";

export class AuthForm extends Form{
    constructor(rootId) {
        super();
        this.root = document.getElementById(`${rootId}`);
        this.modal = this.createModal(['formModal', 'formModal--transparentBlack', 'formModal--visible']); // createModal is in Form class
        this.credentials = { userName: '', emailAdress: '', password: ''};
        this.formStatus;
        this.create(this.root, this.modal); 
    }
    create(root, modal) {
        //Create authentication form
        root.insertAdjacentElement('beforeend', modal);
        modal.innerHTML = `${this.createFormWind('Connection', 'Sign up', 'Log in', 'Sign up')}`;
        this.addMenuClickEv('menuTab1', 'menuTab2', this.signUpTab.bind(this));
        this.addMenuClickEv('menuTab2', 'menuTab1', this.logInTab.bind(this));
        this.formStatus = 'Sign up'; //Init form status;
        this.initFormContent('form');
        this.addPwdRecoveryBtn();
        document.querySelector('.eyeIcon').addEventListener('click', this.togglePwdVisible);
        document.getElementById('formBtn').addEventListener('click', this.credProcessing.bind(this));
    }
    addPwdRecoveryBtn() {
        document.querySelector('.formWindow__flex').insertAdjacentHTML('beforeend', `
            <button class="btn tab form__element--hidden" id="pwdRecovery" 
            "type="button" aria-label="Password recovery">I forgot my password</button>
        `)
        const pwdRecovery = document.getElementById('pwdRecovery');
        pwdRecovery.addEventListener('click', ()=> { 
            this.displayPwdRecoveryModal(); 
            pwdRecovery.disabled = true;  //Prevent displaying multiple pwdRecoveryModals by clicking enter
        });
    }
    signUpTab() {
        //Display form's elements to allow sign up
        this.formStatus = 'Sign up';
        this.updateForm(['userName', 'emailAdress', 'password'], ['userName', 'pwdRecovery'], 'form__element--hidden');
        this.updateBtnTxt('Sign up');
    } 
    logInTab() {
        //Display form's elements to allow log in
        this.formStatus = 'Log in';
        this.updateForm(['userName','emailAdress', 'password'], ['userName', 'pwdRecovery'], 'form__element--hidden');
        this.updateBtnTxt('Log in');
        this.credentials.userName = '';
    }
    updateBtnTxt(btnTxt) { document.getElementById('formBtn').textContent = btnTxt; }
    initFormContent(formId) {
        //Initialize form with elements at first rendering
        document.getElementById(`${formId}`).innerHTML = `
            <input class="tab form__input " type="text" id="userName" placeholder="User name" autocomplete="off">
            <input class="tab form__input " type="email" id="emailAdress" placeholder="Email address" autocomplete="off">
            <div class="form__password">
                <input class="tab form__input " type="password" id="password" placeholder="Password" autocomplete="off">
                <i class="eyeIcon eyeIcon--gray fa-solid fa-eye"></i>
            </div>
        `
    }
    togglePwdVisible() {
        //Toggles password's visibility 
        const eyeIcon = document.querySelector('.eyeIcon');
        const password = document.getElementById('password');
        eyeIcon.classList.toggle('eyeIcon--white');
        password.type = password.type === 'password' ? 'text' : 'password';
    }
    credProcessing() {
        //Process user credentials 
        const logIn = [{id: 'password', minLength: 8}];
        const signUp = [{id: 'userName', minLength: 6}, {id: 'password', minLength: 8}];
        if(this.formStatus === 'Log in') { 
            this.checkCredentials(logIn) ? Database.logIn(this.credentials) : null;
        } else { 
            this.checkCredentials(signUp) ? Database.signUp(this.credentials): null;
            const validation = document.getElementById('validation'); //Reset validation feedback
            if(!validation.classList.contains('form__element--hidden')) { validation.classList.add('form__element--hidden'); }
        }
    } 
    checkCredentials(objArray) {
        const status1 = this.checkMinLength(objArray);
        const status2 = this.checkEmailAformat('emailAdress', 'errorList');
        const errorList =  document.getElementById('errorList');
        if(!document.querySelector('.tab__error')) { errorList.classList.add('form__element--hidden'); }
        return status1 && status2;
    }
    checkMinLength(objArray) {
        //Check input length + display error message if input length < minlength
        const errorList = document.getElementById('errorList');
        let status = 1;
        if(errorList.innerHTML !== '') { errorList.innerHTML = '';} //Reset errorList
        objArray.forEach((obj)=> {
            const elmt = document.getElementById(`${obj.id}`);
            const elmtValue = elmt.value.trim(); 
            const errorMess = `<li>${elmt.placeholder} must be at least ${obj.minLength} characters long</li>`;
            if(elmtValue.length < obj.minLength) {
                if(!elmt.classList.contains('tab__error')) { 
                    elmt.classList.add('tab__error'); 
                    errorList.classList.remove('form__element--hidden');
                }
                status --;
                errorList.insertAdjacentHTML('beforeend', errorMess); 
            } else {
                if(elmt.classList.contains('tab__error')) { elmt.classList.remove('tab__error'); }
                if(this.credentials[`${elmt.id}`] !== elmtValue){ this.credentials[`${elmt.id}`] = elmtValue; }
            }
        });
        return status === 1;
    }
    checkEmailAformat(emailId, errorListId) {
        const email = document.getElementById(`${emailId}`);
        const errorList = document.getElementById(`${errorListId}`);
        const emailValue = email.value.trim().toLowerCase();
        if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            email.classList.add('tab__error'); 
            errorList.classList.remove('form__element--hidden');
            errorList.insertAdjacentHTML('beforeend', `<li>Invalid email address</li>`);
            return false;
        }else {
            if(email.classList.contains('tab__error')) { email.classList.remove('tab__error'); }
            if(this.credentials[`${emailId}`] !== emailValue){ this.credentials[`${emailId}`] = emailValue; }
        } 
        return true;
    }
    displayPwdRecoveryModal() {
        const templt = document.getElementById('pwdRecoveryTemplt');
        const content = templt.content.cloneNode(true);
        document.querySelector('body').appendChild(content);
        document.querySelector('.closingCross').addEventListener('click', this.closePwdRecoveryModal);
        document.getElementById('formPwdRecovery').addEventListener('submit', (event)=>{
            event.preventDefault();
            this.sendPwdRecovery();
        });
    }
    closePwdRecoveryModal() { 
        document.getElementById('pwdRecoveryModal').remove();
        document.getElementById('pwdRecovery').disabled = false;
    }
    sendPwdRecovery() {
        const errorField = document.getElementById('errorField');
        const confirmation = document.getElementById('confirmation');
        if(errorField.innerHTML !== '') { errorField.innerHTML = '';}
        if(confirmation.innerHTML !== '') { confirmation.innerHTML = '';}
        if(!confirmation.classList.contains('form__element--hidden')) { confirmation.classList.add('form__element--hidden') }
        if(this.checkEmailAformat('recoveryEaddress', 'errorField')) { Database.sendRecoveryMail('recoveryEaddress'); }
    }
}