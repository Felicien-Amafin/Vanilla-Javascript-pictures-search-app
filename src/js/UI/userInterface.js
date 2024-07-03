import { AlertDeleteImg } from "./alertDeleteImg";
import { Database } from "../data/database";

export class Ui {
    static collForm; // Stores Collections form
    static imgModal; // Stores Image Modal
    static collList; // Stores collections list
    static startingPageElmts = ['banner', 'collections'];
    static startingPGallery; // Stores starting page's img gallery 
    static activeColl = { collName: '', data: '', userId: '' }; // stores collection which user clicks on 

    static addCollection(collectionsNames, collName) { Ui.collList.addCollection(collectionsNames, collName); }
    static changeGalleryTitle(title) { document.querySelector('.gallery__title').textContent = `${title}`; }
    static async deleteColl(cellToRemove, collName, userId) {
        try {
            const collectionsNames = Ui.collForm.collectionsNames;// Get collectionsNames for update
            const newArray = collectionsNames.filter((name)=> { 
                return name !== collName;
            })
            await Database.deleteColl(newArray, collName, userId); //Remove Collection from Database
            document.getElementById(`${cellToRemove}`).remove(); //Remove collection from the DOM
            Ui.collForm.collectionsNames = [...newArray]; //Update collectionNames in collectionForm 
            Ui.collList.handleDefaultMess(newArray); //Display default message if needed
        } catch(error) {
            alert("Sorry can't delete collection");
        }
    }
    static deleteGalleryContent() { document.querySelector('.gallery__pictures').innerHTML = ''; }
    static deleteImgWidget(imgObj){ 
        new AlertDeleteImg(['Yes', 'No'], Database.deleteImg, Ui.activeColl, imgObj);
    }
    static displayCollForm(imgObj) { Ui.collForm.display(imgObj); }
    static displayImgModal(imgObj) { Ui.imgModal.display(imgObj); }
    static displayStartingPage() {
        Ui.startingPageElmts.map((id)=> { document.getElementById(`${id}`).style.display = ''; }) // remove display none
        window.scrollY > 0 ? scrollTo(0,0) : null;
        const title = 'More than 1 million high quality images';
        Ui.changeGalleryTitle(title);
        Ui.deleteGalleryContent();
        Ui.hideLoadMoreBtn();
        Ui.startingPGallery.renderImgWidgets();
    }
    static hideLoadingMess() { document.getElementById('searchFeedback').classList.add('none'); }
    static hideLoadMoreBtn() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        loadMoreBtn.classList.contains('none') ? null : loadMoreBtn.classList.add('none');
    }
    static hideStartingPageElmts() {
        //Hide "banner" + "collections" sections
        Ui.startingPageElmts.map((id)=> {
            document.getElementById(`${id}`).style.display = 'none';
        })
    }
    static showLoadMoreBtn() { document.getElementById('loadMoreBtn').classList.remove('none'); }
    static showLoadingMess() { document.getElementById('searchFeedback').classList.remove('none'); }
    static updateActiveColl(imgObj) {
        const newArray = Ui.activeColl.data.filter((obj)=> {
            return obj.id !== imgObj.id;
        })
        Ui.activeColl.data = newArray;
    }
    static updateLoadMoreBtn(btnText, disabledValue) {
        document.getElementById('loadMoreBtn').textContent = btnText;
        document.getElementById('loadMoreBtn').disabled = disabledValue;
    }
}