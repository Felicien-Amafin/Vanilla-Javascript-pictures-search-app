import { Ui } from './userInterface';

export class ImgWidget {
    constructor(img, icons, root) {
        this.img = img;
        this.icons = icons;
        this.root = root;
        this.create(this.img, this.root, this.icons);
    }
    create(img, root, icons) {
        const widget = document.createElement('div');
        widget.classList.add('widget');
        widget.id= `widget-${img.id}`;
        root.insertAdjacentElement('beforeend', widget);
        widget.innerHTML = `
            <img loading="lazy" src="${img.imgSrc}" alt="${img.title}">
            <ul class="iconBar">${this.addIcons(icons, img.id)}</ul>
        `
        this.addEventLstns(widget.id, img, icons);
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
    addEventLstns(widgetId, img, icons) {
        const widget = document.getElementById(`${widgetId}`);
        widget.querySelector('img').addEventListener('click', ()=> {
            Ui.displayImgModal(img);
        })
        icons.map((icon)=> {
            const iconElmt = widget.querySelector(`#${icon.name}-${img.id}`);
            iconElmt.addEventListener(`${icon.event}`,(event)=> {
                icon.prevDefault ? event.preventDefault() : null;
                icon.func(img);
            });
        }) 
    }
}      