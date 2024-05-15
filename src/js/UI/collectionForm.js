import { Form } from "./form";

export class CollectionForm extends Form{
    constructor(rootId) {
        super();
        this.rootEl = document.getElementById(`${rootId}`);
        this.create(this.rootEl, this.modalEl); 
    }
    create(rootEl, modalEl) {
        rootEl.insertAdjacentElement('beforeend', modalEl);
        modalEl.innerHTML = `
            <button class="closingCross formModal__closingCross" id="closingCollForm" type="button" aria-label="Close window">
                <i class="fa-solid fa-xmark" title="close"></i>
            </button>
            ${this.createFormWind('Collection', 'Create a collection', 'Add to a collection', 'Create')}
        `;
        this.addMenuClickEv('menuTab1', 'menuTab2', this.createTab.bind(this));
        this.addMenuClickEv('menuTab2', 'menuTab1', this.addTab.bind(this));
        this.initFormContent('form');
        //Add click Listener to hide Collectionform
        const closingCollForm = document.getElementById('closingCollForm');
        closingCollForm.addEventListener('click', ()=> {
            document.querySelector('.formModal').classList.remove('formModal--slide');
        })
    }
    createTab() {
        this.updateForm(['createColl'], ['selectColl', 'createColl'], 'form__element--hidden');
        this.updateBtnTxt('Create');
    } 
    addTab() {
        this.updateForm([], ['selectColl', 'createColl'], 'form__element--hidden');
        this.updateBtnTxt('Add');
    }
    initFormContent(formId) {
        document.getElementById(`${formId}`).innerHTML = `
        <input class="form__input formTab" type="text" id="createColl" placeholder="Chose a name" autocomplete="off">
        <div class="form__selection formTab form__element--hidden" id="selectColl">
            <select name="collection-select">
                <option>Select a collection</option>  
            </select>
            <i class="selectArrow fa-solid fa-caret-down"></i>
        </div>
        `
    }
    display(className) { this.modalEl.classList.add(`${className}`); }
}