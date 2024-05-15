export class Form {
    constructor() { this.modalEl = this.createModal(); }
    createModal() {
        const modalEl = document.createElement('section');
        modalEl.classList.add('formModal');
        modalEl.id = 'formModal';
        return modalEl;
    }
    createFormWind(titleTxt, menuTab1Txt, menuTab2Txt, btnTxt) {
        return `
            <div class="formWindow">
                <h2 class="formWindow__title" id="formTitle">${titleTxt}</h2>
                <menu class="formMenu">
                    <li class="formTab selected" id="menuTab1">${menuTab1Txt}</li>
                    <li class="formTab hightlight" id="menuTab2">${menuTab2Txt}</li>
                </menu>
                <div class="formWindow__flex">
                    <form class="form" id="form"></form>
                    <button class="formBtn formTab" type="button" id="formBtn" aria-label="form validation">${btnTxt}</button>
                    <ul class="form__errorMess form__element--hidden" id="errorList"></ul>
                    <ul class="form__validation form__element--hidden" id="validation"></ul>
                </div>
            </div>
        `
    }
    addMenuClickEv(firstElId, secondElId, firstElFunc) {
        const firstEl = document.getElementById(`${firstElId}`);
        const secondEl = document.getElementById(`${secondElId}`);
        firstEl.addEventListener('click', ()=> {
            if(secondEl.classList.contains('selected')) {
                secondEl.classList.replace('selected', 'hightlight');
                firstEl.classList.replace('hightlight','selected');
                firstElFunc();
            }
        });
    }
    updateForm(inputToClear, inputToToggle, maskingClass) {
        const errorListEl = document.getElementById('errorList');
        const validationEl = document.getElementById('validation');
        inputToClear.forEach(id => {
            const el = document.getElementById(`${id}`);
            el.value = '';
            if(el.classList.contains('formTab__error')) { el.classList.remove('formTab__error'); }
        });   
        inputToToggle.forEach(id => { document.getElementById(`${id}`).classList.toggle(`${maskingClass}`); });  
        if(!errorListEl.classList.contains('form__element--hidden')) { errorListEl.classList.add('form__element--hidden'); }
        if(!validationEl.classList.contains('form__element--hidden')) { validationEl.classList.add('form__element--hidden'); }
    }
    updateBtnTxt(btnTxt) { document.getElementById('formBtn').textContent = btnTxt; }
}