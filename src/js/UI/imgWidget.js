import { Ui } from './userInt';

export class ImgWidget {
    constructor(imgObj, icons, root ) {
        this.imgObj = imgObj;
        this.icons = icons;
        this.root = root;
        this.create(this.imgObj, this.root, this.icons);
    }
    create(imgObj, root, icons) {
        const widget = document.createElement('div');
        widget.classList.add('widget');
        widget.id= `widget-${imgObj.id}`;
        root.insertAdjacentElement('beforeend', widget);
        widget.innerHTML = `
            <img loading="lazy" src=${imgObj.imgSrc}>
            <ul class="iconBar">${this.addIcons(icons, imgObj.id)}</ul>
        `
        this.addEventLstns(widget.id, imgObj, icons);
    }
    addIcons(icons, imgObjId) {
        let iconBar = '';
        icons.map((icon)=> {
            iconBar +=
            `<li class="iconBar__icon" id=${icon.name}-${imgObjId}>
                <i class="${icon.class}"></i>
            </li>`
        })
        return iconBar;
    }
    addEventLstns(widgetId, imgObj, icons) {
        const widget = document.getElementById(`${widgetId}`);
        widget.querySelector('img').addEventListener('click', ()=> {
            Ui.displayImgModal(this.imgObj);
        })
        icons.map((icon)=> {
            const iconElmt = widget.querySelector(`#${icon.name}-${imgObj.id}`);
            iconElmt.addEventListener(`${icon.event}`,(event)=> {
                icon.prevDefault ? event.preventDefault() : null;
                icon.func(this.imgObj);
            });
        }) 
    }
}      