import { Form } from "./form";
import { Database } from "../data/database";

export class AuthForm extends Form{
    constructor(rootId) {
        super();
        this.root = document.getElementById(`${rootId}`);
        this.credentials = { userName: '', emailAdress: '', password: ''};
        this.formStatus;
        this.createAuth(this.root, this.modal); 
    }
    createAuth(root, modal) {
        root.insertAdjacentElement('beforeend', modal);
        modal.innerHTML = `${this.createFormWind('Connection', 'Sign up', 'Log in', 'Sign up')}`;
        this.matchWindFormat(modal);
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
    matchWindFormat(modal) {
        if(window.matchMedia("(min-width: 992px)").matches) {
            modal.classList.toggle('formModal--static');
        } else {
            document.querySelector('.mainPage__btn').addEventListener('click', ()=> {
                modal.classList.toggle('formModal--slide');
            })
        }
    }
    signUpTab() {
        this.formStatus = 'Sign up';
        this.updateForm(['userName', 'emailAdress', 'password'], ['userName', 'pwdRecovery'], 'form__element--hidden');
        this.updateBtnTxt('Sign up');
    } 
    logInTab() {
        this.formStatus = 'Log in';
        this.updateForm(['userName','emailAdress', 'password'], ['userName', 'pwdRecovery'], 'form__element--hidden');
        this.updateBtnTxt('Log in');
        this.credentials.userName = '';
    }
    initFormContent(formId) {
        document.getElementById(`${formId}`).innerHTML = `
            <input class="tab form__input " type="text" id="userName" placeholder="User name" autocomplete="off">
            <input class="tab form__input " type="text" id="emailAdress" placeholder="Email address" autocomplete="off">
            <div class="form__password">
                <input class="tab form__input " type="password" id="password" placeholder="Password" autocomplete="off">
                <i class="eyeIcon eyeIcon--gray fa-solid fa-eye"></i>
            </div>
        `
    }
    togglePwdVisible() { 
        const eyeIcon = document.querySelector('.eyeIcon');
        const password = document.getElementById('password');
        eyeIcon.classList.toggle('eyeIcon--white');
        password.type = password.type === 'password' ? 'text' : 'password';
    }
    credProcessing() {
        const logIn = [{id: 'password', minLength: 8}];
        const signUp = [{id: 'userName', minLength: 6}, {id: 'password', minLength: 8}];
        if(this.formStatus === 'Log in') { 
            this.checkCredentials(logIn) ? Database.logIn(this.credentials) : null;
        } else { 
            this.checkCredentials(signUp) ? Database.signUp(this.credentials): null;
            //Reset validation
            const validation = document.getElementById('validation');
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
        const errorList = document.getElementById('errorList');
        let status = 1;
        if(errorList.innerHTML !== '') { errorList.innerHTML = '';}
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
        this.checkEmailAformat('recoveryEaddress', 'errorField') ? Database.sendRecoveryMail('recoveryEaddress') : null;
    }
}