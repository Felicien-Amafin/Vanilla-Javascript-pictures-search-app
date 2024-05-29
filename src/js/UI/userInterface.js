
export class Ui {
    static collForm;
    static imgModal;
    static startingPageElmts = ['banner', 'collections'];
    static uiStatus = { startingPage:'startingP', searchPage:'searchP', status: 'startingP' };

  /*   static update(funcArray) {
        funcArray.map((func)=> { func(); });
    } */
    static hideStartingPageElmts() {
        Ui.startingPageElmts.map((id)=> {
            document.getElementById(`${id}`).style.display = "none";
        })
        Ui.uiStatus.status = 'searchP';
    }
    static updateGallery(galleryTitle) {
        document.querySelector('.gallery__pictures').innerHTML = '';
        document.querySelector('.gallery__title').textContent = `${galleryTitle}`;
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        loadMoreBtn.classList.contains('none') ? loadMoreBtn.classList.remove('none') : null;
    }
    static displayCollForm(imgObj) {
        Ui.collForm.display(imgObj);
        console.log(imgObj)
    }
   /*  static removeCollForm() {
        Ui.collForm.removeCollForm();
    } */
    static displayImgModal(imgObj) {
        Ui.imgModal.display(imgObj);
    }
    static updateLoadMoreBtn() {
        
    }
    static deleteImgWidget() {
        
    }
}