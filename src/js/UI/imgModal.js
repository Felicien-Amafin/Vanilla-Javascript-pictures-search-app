export class ImgModal {
    constructor(rootId) {
        this.rootEl = document.getElementById(`${rootId}`);
        this.rootEl.insertAdjacentHTML('beforeend', this.createModal());
        //Add click Listener to hide imgModal
        const closingImgForm = document.getElementById('closingImgForm');
        closingImgForm.addEventListener('click', ()=> {
            document.querySelector('.imgModal').classList.remove('imgModal--visible');
        })
    }
    createModal() {
        return `
            <div class="imgModal">
                <button class="closingCross" type="button" id="closingImgForm" aria-label="Close window">
                    <i class="fa-solid fa-xmark" title="close"></i>
                </button>
                <div class="imgWindow">
                    <div class="imgWindow__flexIcons">
                        <button class="imgWindow__icon" type="button" aria-label="Open collection form" title="Collection" id="collectionI">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="imgWindow__icon" type="button" aria-label="Download image" title="Download" id="downloadI">
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
        const imgModal = document.querySelector('.imgModal');
        const img = imgModal.querySelector('img');
        img.src = ``;
        img.src = `${imgObj.src}`;
        imgModal.classList.add('imgModal--visible');
        imgModal.querySelector('.imgWindow__imgTitle').textContent = `${imgObj.title.toUpperCase()}`;
        
       
    }
}