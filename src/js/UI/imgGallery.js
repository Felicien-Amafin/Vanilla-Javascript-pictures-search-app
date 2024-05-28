import { ImgWidget } from "./imgWidget";

export class ImgGallery {
    constructor(imgArray, icons) {
        this.imgArray = imgArray;
        this.icons = icons;
        this.root = document.querySelector('.gallery__pictures');
        this.renderImgWidgets(this.imgArray, this.icons, this.root);
    }
    renderImgWidgets(imgArray, icons, root) { 
        imgArray.forEach(imgObj => { new ImgWidget(imgObj, icons, root); });
    }
}
