
export class Ui {
    static collForm;
    static imgModal;
    static menu;
    static startingPageElmts = ['banner', 'collections'];
    static uiStatus = { startingPage:'startingP', searchPage:'searchP', status: 'startingP' };

    static hideStartingPageElmts() {
        Ui.startingPageElmts.map((id)=> {
            document.getElementById(`${id}`).style.display = "none";
        })
        Ui.uiStatus.status = 'searchP';
    }
    static changeGalleryTitle(galleryTitle) { document.querySelector('.gallery__title').textContent = `${galleryTitle}`; }
    static deleteGalleryContent() { document.querySelector('.gallery__pictures').innerHTML = ''; }
    static showLoadMoreBtn() { document.getElementById('loadMoreBtn').classList.remove('none'); }
    static hideLoadMoreBtn() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        loadMoreBtn.classList.contains('none') ? null : loadMoreBtn.classList.add('none');
    }
    static displayCollForm(imgObj) { Ui.collForm.display(imgObj); }
    static displayImgModal(imgObj) { Ui.imgModal.display(imgObj); }
    static updateLoadMoreBtn(btnText, disabledValue) {
        document.getElementById('loadMoreBtn').textContent = btnText;
        document.getElementById('loadMoreBtn').disabled = disabledValue;
    }
    static showSearchFeedBack() { document.getElementById('searchFeedback').classList.remove('none'); }
    static hideSearchFeedBack() { document.getElementById('searchFeedback').classList.add('none'); }
    static updateMenu() { }
    static deleteImgWidget() {}

}