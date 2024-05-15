import { ImgWidget } from "./imgWidget";

export class ImgGallery {
    constructor(imgArray) {
        this.rootEl = document.querySelector('.gallery__pictures');
        this.imgArray = imgArray;
        this.renderImgWidgets(this.imgArray, this.rootEl);
    }
    renderImgWidgets(imgArray, rootEl) { 
        let id = 0;
        imgArray.forEach(imgObj => {
            new ImgWidget(imgObj, id, rootEl);
            id ++;
        });
    }
}
