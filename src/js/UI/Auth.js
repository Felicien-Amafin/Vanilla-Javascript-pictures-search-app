import { Form } from "./form";
import { Database } from "../data/database";

export class Auth extends Form{
    constructor(rootId) {
        super();
        this.rootEl = document.getElementById(`${rootId}`);
        this.credentials = { userName: '', emailAdress: '', password: ''};
        this.createAuth(this.rootEl, this.modalEl); 
    }
    createAuth(rootEl, modalEl) {
        rootEl.insertAdjacentElement('beforeend', modalEl);
        modalEl.innerHTML = `${this.createFormWind('Connection', 'Sign up', 'Log in', 'Sign up')}`;
        this.matchWindFormat(modalEl);
        this.addMenuClickEv('menuTab1', 'menuTab2', this.signUpTab.bind(this));
        this.addMenuClickEv('menuTab2', 'menuTab1', this.logInTab.bind(this));
        this.initFormContent('form');
        document.querySelector('.eyeIcon').addEventListener('click', this.togglePwdVisible);
        document.getElementById('formBtn').addEventListener('click', this.credProcessing.bind(this));
        document.getElementById('pwdRecovery').addEventListener('click', this.displayPwdRecoveryModal.bind(this));
    }
    matchWindFormat(modalEl) {
        if(window.matchMedia("(min-width: 992px)").matches) {
            modalEl.classList.toggle('formModal--static');
        } else {
            document.querySelector('.mainPage__btn').addEventListener('click', ()=> {
                modalEl.classList.toggle('formModal--slide');
            })
        }
    }
    signUpTab() {
        this.updateForm(['userName', 'emailAdress', 'password'], ['userName', 'pwdRecovery'], 'form__input--hidden');
        this.updateBtnTxt('Sign up');
    } 
    logInTab() {
        this.updateForm(['userName','emailAdress', 'password'], ['userName', 'pwdRecovery'], 'form__input--hidden');
        this.updateBtnTxt('Log in');
        this.credentials.userName = '';
    }
    initFormContent(formId) {
        document.getElementById(`${formId}`).innerHTML = `
            <input class="formTab form__input " type="text" id="userName" placeholder="User name" autocomplete="off">
            <input class="formTab form__input " type="text" id="emailAdress" placeholder="Email address" autocomplete="off">
            <div class="form__password">
                <input class="formTab form__input " type="password" id="password" placeholder="Password" autocomplete="off">
                <i class="eyeIcon eyeIcon--gray fa-solid fa-eye"></i>
            </div>
            <button class="formBtn formTab form__input--hidden" id="pwdRecovery" "type="button" aria-label="Password recovery">I forgot my password</button>
        `
    }
    togglePwdVisible() { 
        const eyeIconEl = document.querySelector('.eyeIcon');
        const passwordEl = document.getElementById('password');
        eyeIconEl.classList.toggle('eyeIcon--white');
        passwordEl.type = passwordEl.type === 'password' ? 'text' : 'password';
    }
    credProcessing() {
        const logIn = [{id: 'password', minLength: 8}];
        const signUp = [{id: 'userName', minLength: 6}, {id: 'password', minLength: 8}];
        if(document.getElementById('formBtn').textContent === 'Log in') { 
            this.checkCredentials(logIn) ? Database.sendLoginCred(this.credentials) : null;
        } else { 
            this.checkCredentials(signUp) ? Database.sendSignUpCred(this.credentials): null;
            const validationEl = document.getElementById('validation');
            validationEl.classList.contains('form__input--hidden') ? null : validationEl.classList.add('form__input--hidden');  
        }
    } 
    checkCredentials(objArray) {
        const status1 = this.checkMinLength(objArray);
        const status2 = this.checkEmailAformat('emailAdress', 'errorList');
        const errorList =  document.getElementById('errorList');
        if(!document.querySelector('.formTab__error')) { errorList.classList.add('form__input--hidden'); }
        return status1 && status2;
    }
    checkMinLength(objArray) {
        const errorList = document.getElementById('errorList');
        let status = 1;
        if(errorList.innerHTML !== '') { errorList.innerHTML = '';}
        objArray.forEach((obj)=> {
            const el = document.getElementById(`${obj.id}`);
            const elValue = el.value.trim(); 
            const errorMess = `<li>${el.placeholder} must be at least ${obj.minLength} characters long</li>`;
            if(elValue.length < obj.minLength) {
                if(!el.classList.contains('formTab__error')) { 
                    el.classList.add('formTab__error'); 
                    errorList.classList.remove('form__input--hidden');
                }
                status --;
                errorList.insertAdjacentHTML('beforeend', errorMess); 
            } else {
                if(el.classList.contains('formTab__error')) { el.classList.remove('formTab__error'); }
                if(this.credentials[`${el.id}`] !== elValue){ this.credentials[`${el.id}`] = elValue; }
            }
        });
        return status === 1;
    }
    checkEmailAformat(emailId, errorListId) {
        const emailEl = document.getElementById(`${emailId}`);
        const errorListEl = document.getElementById(`${errorListId}`);
        const emailValue = emailEl.value.trim().toLowerCase();
        if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailEl.classList.add('formTab__error'); 
            errorListEl.classList.remove('form__input--hidden');
            errorListEl.insertAdjacentHTML('beforeend', `<li>Invalid email address</li>`);
            return false;
        }else {
            if(emailEl.classList.contains('formTab__error')) { emailEl.classList.remove('formTab__error'); }
            if(this.credentials[`${emailId}`] !== emailValue){ this.credentials[`${emailId}`] = emailValue; }
        } 
        return true;
    }
    displayPwdRecoveryModal(event) {
        event.preventDefault();
        const templt = document.getElementById('pwdRecoveryTemplt');
        const content = templt.content.cloneNode(true);
        document.querySelector('body').appendChild(content);
        document.querySelector('.closingCross').addEventListener('click', this.closePwdRecoveryModal);
        document.getElementById('pwdRecoveryBtn').addEventListener('click', this.sendPwdRecovery.bind(this));
    }
    closePwdRecoveryModal() { document.getElementById('pwdRecoveryModal').remove();}
    sendPwdRecovery() {
        const errorFieldEl = document.getElementById('errorField');
        const confirmationEl = document.getElementById('confirmation');
        if(errorFieldEl.innerHTML !== '') { errorFieldEl.innerHTML = '';}
        if(confirmationEl.innerHTML !== '') { confirmationEl.innerHTML = '';}
        if(!confirmationEl.classList.contains('form__input--hidden')) { confirmationEl.classList.add('form__input--hidden') }
        this.checkEmailAformat('recoveryEaddress', 'errorField') ? Database.sendRecoveryMail('recoveryEaddress') : null;
    }
}