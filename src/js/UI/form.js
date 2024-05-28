export class Form {
    constructor() { this.modal = this.createModal(); }
    createModal() {
        const modal = document.createElement('section');
        modal.classList.add('formModal');
        modal.id = 'formModal';
        return modal;
    }
    createFormWind(titleTxt, menuTab1Txt, menuTab2Txt, btnTxt) {
        return `
            <div class="formWindow">
                <h2 class="formWindow__title" id="formTitle">${titleTxt}</h2>
                <menu class="formMenu">
                    <li class="tab selected" id="menuTab1">${menuTab1Txt}</li>
                    <li class="tab hightlight" id="menuTab2">${menuTab2Txt}</li>
                </menu>
                <div class="formWindow__flex">
                    <form class="form" id="form"></form>
                    <button class="btn tab" type="button" id="formBtn" aria-label="form validation">${btnTxt}</button>
                    <ul class="form__errorMess form__element--hidden" id="errorList"></ul>
                    <ul class="form__validation form__element--hidden" id="validation"></ul>
                </div>
            </div>
        `
    }
    addMenuClickEv(firstElmtId, secondElmtId, firstElmtFunc) {
        const firstElmt = document.getElementById(`${firstElmtId}`);
        const secondElmt = document.getElementById(`${secondElmtId}`);
        firstElmt.addEventListener('click', ()=> {
            if(secondElmt.classList.contains('selected')) {
                secondElmt.classList.replace('selected', 'hightlight');
                firstElmt.classList.replace('hightlight','selected');
                firstElmtFunc();
            }
        });
    }
    updateForm(inputToClear, inputToToggle, maskingClass) {
        const errorList = document.getElementById('errorList');
        const validation = document.getElementById('validation');
        inputToClear.forEach(id => {
            const elmt = document.getElementById(`${id}`);
            elmt.value = '';
            if(elmt.classList.contains('tab__error')) { elmt.classList.remove('tab__error'); }
        });   
        inputToToggle.forEach(id => { document.getElementById(`${id}`).classList.toggle(`${maskingClass}`); });  
        if(!errorList.classList.contains('form__element--hidden')) { errorList.classList.add('form__element--hidden'); }
        if(!validation.classList.contains('form__element--hidden')) { validation.classList.add('form__element--hidden'); }
    }
    updateBtnTxt(btnTxt) { document.getElementById('formBtn').textContent = btnTxt; }
}