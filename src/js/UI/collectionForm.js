import { Form } from "./form";
import { Database } from "../data/database";

export class CollectionForm extends Form{
    constructor(rootId, userData, userId) {
        super();
        this.root = document.getElementById(`${rootId}`);
        this.userData = userData;
        this.userId = userId;
        this.collectionsNames = userData.collectionsNames;
        this.formStatus;
        this.imgObj;
        this.trackFeedBackId;
        this.create(this.root, this.modal); 
    }
    //Create collection form
    create(root, modal) {
        root.insertAdjacentElement('beforeend', modal);
        modal.innerHTML = `
            <button class="closingCross formModal__closingCross" id="closingCollForm" type="button" aria-label="Close window">
                <i class="fa-solid fa-xmark" title="close"></i>
            </button>
            ${this.createFormWind('Add to a collection', 'New collection', 'Existing collection', 'Add')}
        `;
        this.addMenuClickEv('menuTab1', 'menuTab2', this.createTab.bind(this));
        this.addMenuClickEv('menuTab2', 'menuTab1', this.updateTab.bind(this));
        this.formStatus = 'create'; //Init formStatus
        this.initFormContent('form');
        this.addEventLis();
    }
    //Ui's tab to create new img collection
    createTab() {
        this.updateForm(['collNameInput'], ['selectColl', 'collNameInput'], 'form__element--hidden');
        this.formStatus = 'create';
    } 
    //Ui's tab to update img collection
    updateTab() {
        this.updateForm([], ['selectColl', 'collNameInput'], 'form__element--hidden');
        this.formStatus = 'update';
    }
    initFormContent(formId) {
        document.getElementById(`${formId}`).innerHTML = `
        <input class="form__input tab" type="text" id="collNameInput" placeholder="Chose collection's name" autocomplete="off">
        <div class="form__selection tab form__element--hidden" id="selectColl">
            <select name="collection-select" id="select">
                <option>Select a collection</option>   
            </select>
            <i class="selectArrow fa-solid fa-caret-down"></i>
        </div>
        `
    }
    addEventLis() { 
        document.getElementById('closingCollForm').addEventListener('click', this.hideCollForm.bind(this)); 
        document.getElementById('form').addEventListener('submit', (event)=> {event.preventDefault()});
        document.getElementById('formBtn').addEventListener('click', ()=> {
            this.formStatus === 'create' ? this.createColl(this.imgObj) : this.updateColl();
        }); 
    }
    //Create new img collection
    async createColl(imgObj) {
        this.resetFeedback(this.trackFeedBackId)// Reset If needed
        const collName = this.getCollName('collNameInput');
        const status = this.checkCollName(this.collectionsNames, collName, 25);
        if(status) {
            const temp = [...this.collectionsNames];
            temp.push(collName);
            const sortedCollNames = temp.sort();
            try {
                await Database.createColl(sortedCollNames, collName, imgObj, this.userId);
                this.collectionsNames = temp;
                this.feedback('validation', `"${collName}" has been added as new collection!`);
                console.log(this.collectionsNames);
            } catch(error) { this.feedback('errorList', `${error}`); }
        } 
    }
    //Update existing img collection
    updateColl() {}
    //Get collection's name form input
    getCollName(inputId) {
        let inputValue = document.getElementById(`${inputId}`).value;
        inputValue = inputValue.trim().toUpperCase();
        return inputValue;
    }
    resetFeedback(id) { 
        if(id) {
            const feedback = document.getElementById(`${id}`);
            !feedback.classList.contains('form__element--hidden') ? feedback.classList.add('form__element--hidden') : null;
        }
    }
    checkCollName(collNames, collName, maxLength) {
        this.cleanInput();
        const emptyField = 'Please enter a collection name.';
        const avoidDuplication = `"${collName}" already exists. Please chose another name.`;
        const respectMaxLength = `Collections' names should respect a maximum of 25 characters length.`;
        const value = collNames.find((name)=> name === collName);
        if(value) { 
            this.feedback('errorList', avoidDuplication);
        } else if(collName === '') {
            this.feedback('errorList', emptyField)
        } else if (collName.length > maxLength) {
            this.feedback('errorList', respectMaxLength);
        } else { return true ;}
    }
    //Feedback to createColl/updateColl func
    feedback(id, mess) { 
        const feedback = document.getElementById(`${id}`);
        this.trackFeedBackId = id;
        feedback.classList.remove('form__element--hidden');
        feedback.textContent = `${mess}`; 
    }
    cleanInput() { document.getElementById('collNameInput').value = ''; }
    hideCollForm() { 
        this.cleanInput();
        this.resetFeedback(this.trackFeedBackId);
        document.getElementById('formModal').classList.remove('formModal--slide'); 
    }
    display(imgObj) { 
        document.getElementById('formModal').classList.add('formModal--slide');
        this.imgObj = imgObj;
    }
}