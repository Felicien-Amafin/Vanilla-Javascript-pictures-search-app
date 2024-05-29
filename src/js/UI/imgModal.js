import { Api } from '../data/api';
import { Ui } from './userInterface';

export class ImgModal {
    constructor(rootId) {
        this.root = document.getElementById(`${rootId}`);
        this.root.insertAdjacentHTML('beforeend', this.createModal());
        this.imgObj;
        this.addEventLis(['closingImgForm', 'imgMcollIcon', 'imgMdownloadIcon']);
    }
    createModal() {
        return `
            <div class="imgModal" id="imgModal">
                <button class="closingCross" type="button" id="closingImgForm" aria-label="Close window">
                    <i class="fa-solid fa-xmark" title="close"></i>
                </button>
                <div class="imgWindow">
                    <div class="imgWindow__flexIcons">
                        <button class="imgWindow__icon" id="imgMcollIcon"type="button" aria-label="Open collection form" title="Collection" id="collectionI">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="imgWindow__icon" id="imgMdownloadIcon" type="button" aria-label="Download image" title="Download" id="downloadI">
                            <i class="fa-solid fa-download"></i>
                        </button>
                    </div>
                    <div class="imgWindow__img">
                        <img loading="lazy">
                    </div>
                    <p class="imgWindow__imgTitle"></p>
                </div>
            </div>
        `
    }
    display(imgObj) {
        this.imgObj = imgObj;
        const imgModal = document.querySelector('.imgModal');
        const img =  imgModal.querySelector('img');
        img.src ='';
        img.src = `${imgObj.imgSrc}`;
        img.alt = `${imgObj.title}`;
        imgModal.classList.add('imgModal--visible');
        imgModal.querySelector('.imgWindow__imgTitle').textContent = `${imgObj.title.toUpperCase()}`;
    }
    removeImgModal() { document.getElementById('imgModal').classList.remove('imgModal--visible'); }
    addEventLis(idsArray) {
        idsArray.map((id)=> {
            document.getElementById(`${id}`).addEventListener('click', ()=> {
                id === 'imgMdownloadIcon'? Api.downloadImg(this.imgObj) : null;
                id === 'closingImgForm' ? this.removeImgModal() : null;
                if(id === 'imgMcollIcon') { 
                    this.removeImgModal();
                    Ui.displayCollForm(this.imgObj);
                } 
            })
        })
    }
}