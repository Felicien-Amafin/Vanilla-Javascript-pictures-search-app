import { ImgGallery } from '../ui/imgGallery'
import { icons } from './imgData'
import { Ui } from '../ui/userInterface'
import { route } from '../router';

export class Api {
    static accessKey = '8gH4g1Qmp3wjuE8n1VEBtf-VmJP7lHMKLaBvIdqSfhU';
    static searchTerm;
    static pageNum;
    static prevResult;
    static perPageNum = 15;

    static newImgSearch(inputId){
        //Get search term + update Ui element + populate img gallery 
        const input = document.getElementById(`${inputId}`);
        const searchTerm = input.value.trim().toLowerCase();
        input.value = '';
        if(searchTerm) { 
            const state = { mode: 'search', keyword: `${searchTerm}`};
            route(state);
            this.loadSearchResults(searchTerm); 
        }
    }
    static async loadSearchResults(searchTerm) {
        this.pageNum = 1;
        this.searchTerm = searchTerm;
        this.prevResult = false;
        window.scrollY > 0 ? scrollTo(0,0) : null;
        //Update Gallery
        Ui.hideStartingPageElmts(); //If needed
        Ui.deleteGalleryContent();
        Ui.hideLoadMoreBtn();// if made visible from previous search
        Ui.showLoadingMess();
        await this.fetchImgForGallery(this.searchTerm, this.pageNum, this.perPageNum); 
        Ui.hideLoadingMess();
    }
    static async loadMoreImg() {
        //Handles Ui's "load more btn"
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
            const imgs = this.extractData(data.results);
            if(imgs.length > 0 ) {
                if(!this.prevResult) {
                    Ui.changeGalleryTitle(`Results for "${this.searchTerm}"`);
                    Ui.showLoadMoreBtn(); 
                }
                new ImgGallery(imgs, [icons.expand, icons.favorite, icons.download]);
                this.prevResult = true;
                return;
            }
            if (imgs.length === 0 && this.prevResult) {
                alert(`No more images for "${searchTerm}"`); 
                return;
            } 
            Ui.changeGalleryTitle(`No results for "${this.searchTerm}"`);
        } catch (error) { 
            alert("Sorry but you have reached the limit of request to Images'Api. Please, try again in 1hour."); 
        }
    }
    static extractData(data) {
        const imgs = [];
        data.forEach(obj => {
            const imgObj = {
                id: obj.id,
                title: obj.alt_description,
                imgSrc: obj.urls.regular,
            }
            imgs.push(imgObj);
        });
        return imgs;
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




