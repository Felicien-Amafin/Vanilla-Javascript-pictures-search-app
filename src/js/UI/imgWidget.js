import { User } from '../user';

export class ImgWidget {
    constructor(imgObj, id, rootEl) {
        this.imgObj = imgObj;
        this.id = id;
        this.rootEl = rootEl;
        this.create(this.imgObj, this.id, this.rootEl);
    }
    create(imgObj, id, rootEl) {
        const widget = `
            <div class="widget" id="widget-${id}">
                <img loading="lazy" src=${imgObj.src}>
                <ul class="iconBar">
                    <li class="iconBar__icon" id="expand"><i class="fa-solid fa-expand"></i></li>
                    <li class="iconBar__icon" id="favorite"><i class="fa-solid fa-heart"></i></li>
                    <li class="iconBar__icon" id="download"><i class="fa-solid fa-download"></i></li>
                </ul>
            </div>
        `
        rootEl.insertAdjacentHTML('beforeend', widget);
        this.addEventLstns(`widget-${id}`);
    }
     addEventLstns(widgetId) {
        const widgetEl = document.getElementById(`${widgetId}`);
        widgetEl.querySelector('#favorite').addEventListener('click', ()=> {
            User.collForm.display('formModal--slide', this.imgObj);
        })
        widgetEl.querySelector('#expand').addEventListener('click', ()=> {
            User.imgModal.display(this.imgObj);
        })
        widgetEl.querySelector('img').addEventListener('click', ()=> {
            User.imgModal.display(this.imgObj);
        })
       
    }
}


            