import { ImgGallery } from '../ui/imgGallery'
import { icons } from './imgData'
import { Ui } from '../ui/userInterface'

export class Api {
    static accessKey = '8gH4g1Qmp3wjuE8n1VEBtf-VmJP7lHMKLaBvIdqSfhU';
    static searchTerm;
    static pageNum;
    static prevResult;
    static perPageNum = 15;

    static async newImgSearch(inputId){
        const input = document.getElementById(`${inputId}`);
        const searchTerm = input.value.trim().toLowerCase();
        input.value = '';
        if(searchTerm) {
            this.pageNum = 1;
            this.searchTerm = searchTerm;
            this.prevResult = false;
            if(window.scrollY > 0) { scrollTo(0,0); }
            //Update Gallery
            Ui.uiStatus.status === Ui.uiStatus.startingPage ? Ui.hideStartingPageElmts() : null;
            Ui.deleteGalleryContent();
            Ui.hideLoadMoreBtn();// if made visible from previous search
            Ui.showSearchFeedBack();
            await this.fetchImgForGallery(this.searchTerm, this.pageNum, this.perPageNum); 
            Ui.hideSearchFeedBack();
        }
    }
    static async loadMoreImg() {
        if(this.searchTerm) {
            this.pageNum ++;
            Ui.updateLoadMoreBtn('Loading...', true);
            await this.fetchImgForGallery(this.searchTerm, this.pageNum, this.perPageNum);
            Ui.updateLoadMoreBtn('Load more', false);
        }
    }
    static async fetchImgForGallery(searchTerm, pageNum, perPageNum) {
        try {
            const url = `https://api.unsplash.com/search/photos?page=${pageNum}&query=${searchTerm}&per_page=${perPageNum}&client_id=${this.accessKey}&lang=en&lang=fr`; 
            const response = await fetch(url);
            const data = await response.json();
            const dataArray = this.extractData(data.results);
            if(dataArray.length > 0 ) {
                if(!this.prevResult) {
                    Ui.changeGalleryTitle(`Results for "${this.searchTerm}"`);
                    Ui.showLoadMoreBtn(); 
                }
                new ImgGallery(dataArray, [icons.expand, icons.favorite, icons.download]);
                this.prevResult = true;
            } else if (dataArray.length === 0 && this.prevResult) {
                alert(`No more images for "${searchTerm}"`); 
            } else { 
                Ui.changeGalleryTitle(`No results for "${this.searchTerm}"`);
            }
        } catch (error) { alert('Failed to load image gallery...'); }
    }
    static extractData(dataArray) {
        const result = [];
        dataArray.forEach(obj => {
            const newObj = {
                id: obj.id,
                title: obj.alt_description,
                imgSrc: obj.urls.regular,
            }
            result.push(newObj);
        });
        return result;
    }
    static async downloadImg(imgObj) {
        const anchorTag = document.createElement('a');
        anchorTag.id = `link-${imgObj.id}`;
        anchorTag.download = imgObj.title;
        if(imgObj.imgSrc[0] === '/') {
            anchorTag.href = imgObj.imgSrc;
        } else {
            const link = await Api.fetchImgToDwnld(imgObj.imgSrc);
            anchorTag.href = link;
        }
        anchorTag.click();
    }
    static async fetchImgToDwnld(src) {
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch {
            alert(`Failed to dowload image.`)
        }
    }
}




