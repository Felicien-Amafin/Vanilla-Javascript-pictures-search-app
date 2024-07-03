import { ImgWidget } from "./imgWidget";

export class ImgGallery {
    constructor(imgs, icons) {
        this.imgs = imgs;
        this.icons = icons;
        this.root = document.querySelector('.gallery__pictures');
        this.renderImgWidgets();
    }
    renderImgWidgets() {
        //Render img widgets in picture's gallery 
        this.imgs.forEach((img) => { new ImgWidget(img, this.icons, this.root); });
    }
}
