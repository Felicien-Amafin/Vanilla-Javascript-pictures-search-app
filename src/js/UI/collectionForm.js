import { Form } from "./form";
import { Database } from "../data/database";
import { Ui } from "./userInterface";
import { AlertAddColl } from "./alertAddColl";

export class CollectionForm extends Form{
    constructor(rootId, userData, userId) {
        super();
        this.root = document.getElementById(`${rootId}`);
        this.modal = this.createModal(['formModal', 'formModal--black']); //createModal() is inside Form Class
        this.userData = userData;
        this.userId = userId;
        this.collectionsNames = this.userData.collectionsNames; //Init collectionsNames
        this.formStatus;
        this.imgObj;
        this.trackFeedBackId;
        this.create(this.root, this.modal); 
    }
    create(root, modal) {
        //Create CollectionForm
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
        this.initFormContent('form', this.collectionsNames);
        this.addEventLis();
    }
    createTab() { 
        //Display form's elements to allow new collections creation
        this.updateForm(['collNameInput'], ['selectColl', 'collNameInput'], 'form__element--hidden');
        this.formStatus = 'create';
    } 
    updateTab() { 
        //Display form's elements to allow collections' update
        this.updateForm([], ['selectColl', 'collNameInput'], 'form__element--hidden');
        this.formStatus = 'update';
    }
    initFormContent(formId, collectionsNames) {
        //Initialize form with elements at first rendering
        document.getElementById(`${formId}`).innerHTML = `
        <input class="form__input tab" type="text" id="collNameInput" placeholder="Chose collection's name" autocomplete="off">
        <div class="form__selection tab form__element--hidden" id="selectColl">
            <select name="collection-select" id="select">
                <option>Select a collection</option>
                 ${collectionsNames.map((collName)=> { 
                    return `<option>${collName}</option>`; 
                    }) 
                }   
            </select>
            <i class="selectArrow fa-solid fa-caret-down"></i>
        </div>
        `
    }
    addEventLis() { 
        //Add event listeners to form
        document.getElementById('closingCollForm').addEventListener('click', this.hideCollForm.bind(this)); 
        document.getElementById('form').addEventListener('submit', (event)=> {
            event.preventDefault(); //Prevents to submit the form if user clicks enter when using collectionForm
        });
        document.getElementById('formBtn').addEventListener('click', ()=> {
            this.formStatus === 'create' ? this.createColl(this.imgObj) : this.updateColl(this.imgObj);
        }); 
    }
    async createColl(imgObj) {
         //Allowed creation of new collections
        this.resetFeedback(this.trackFeedBackId) // Reset If needed
        const collName = this.getCollName('collNameInput');
        const status = this.checkCollName(this.collectionsNames, collName, 25);
        if(status) {
            Ui.collList.handleDefaultMess(this.collectionsNames); // Display default message if needed
            const temp = [...this.collectionsNames];
            temp.push(collName);
            const sortedCollNames = temp.sort(); //Sort collections' names before sending to database
            try {
                await Database.createColl(sortedCollNames, collName, imgObj, this.userId);
                this.collectionsNames = sortedCollNames;
                Ui.addCollection(this.collectionsNames, collName); //Add to Ui collections' list
                this.hideCollForm();
                new AlertAddColl(['Ok'], `Picture has been added to "${collName}" !`);
            } catch(error) { this.feedback('errorList', `${error}`); }
        } 
    }
    async updateColl(imgObj) {
        //Allowed update of existing collections
        const collName = document.getElementById('select').value;
        this.resetFeedback('errorList') // Reset feedback if needed
        if(collName === 'Select a collection') {
            this.feedback('errorList', 'Please, select a collection');
            return;
        }
        try {
            document.getElementById('formBtn').disabled = true;
            //Checks if picture already exists in collection
            const docData = await Database.getColl(collName, this.userId);
            let found;
            docData.pictures.map((pic)=> { pic.id === imgObj.id ? found = true : null; })
            if(found) { 
                //Cancels update
                this.feedback('errorList', `Picture already exists in "${collName}". Please, choose another collection.`);
                document.getElementById('formBtn').disabled = false;
            } else {
                //Proceeds to update
                await Database.updateColl(imgObj, collName, this.userId);
                this.hideCollForm();
                document.getElementById('formBtn').disabled = false;
                new AlertAddColl(['Ok'], `Picture has been added to "${collName}" !`);
            }
        } catch(error) { this.feedback('errorList', `${error}`); }
    } 
    getCollName(inputId) { 
        //Get collection's name from input
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
    feedback(id, mess) { 
        //Display feedBack after clicking on "Add" btn
        const feedback = document.getElementById(`${id}`);
        this.trackFeedBackId = id;
        feedback.classList.remove('form__element--hidden');
        feedback.textContent = `${mess}`; 
    }
    cleanInput() { document.getElementById('collNameInput').value = ''; }
    hideCollForm() { 
        //Hide CollectionForm 
        this.cleanInput();
        this.resetFeedback(this.trackFeedBackId);
        document.getElementById('formModal').classList.remove('formModal--visible'); 
    }
    display(imgObj) {
        //Display CollectionForm 
        document.getElementById('formModal').classList.add('formModal--visible');
        this.imgObj = imgObj; 
        document.getElementById('select').innerHTML = `
            <option>Select a collection</option>
                ${this.collectionsNames.map((collName)=> { 
                return `<option>${collName}</option>`; 
                }) 
            }  
        `
    }
}