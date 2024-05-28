import { ImgGallery } from '../ui/imgGallery'
import { icons } from './imgData'
import { Ui } from '../ui/userInt'

export class Api {
    static accessKey = '8gH4g1Qmp3wjuE8n1VEBtf-VmJP7lHMKLaBvIdqSfhU';
    static searchTerm;
    static pageNum;
    static perPageNum = 15;

    static newImgSearch(inputId){
        const input = document.getElementById(`${inputId}`);
        const searchTerm = input.value.trim().toLowerCase();
        input.value = '';
        if(searchTerm) {
            this.pageNum = 1;
            this.searchTerm = searchTerm;
            Ui.uiStatus.status === Ui.uiStatus.startingPage ? Ui.hideStartingPageElmts() : null;
            const title = `Results for "${this.searchTerm}"`;
            Ui.updateGallery(title);
            this.fetchImgForGallery(this.searchTerm, this.pageNum, this.perPageNum); 
        }
    }
    static async loadMoreImg() {
        this.pageNum ++;
        //updateLoadMoreBtn
        await this.fetchImgForGallery(this.searchTerm, this.pageNum, this.perPageNum);
        //updateLoadMoreBtn
    }
    static async fetchImgForGallery(searchTerm, pageNum, perPageNum) {
        try {
            const url = `https://api.unsplash.com/search/photos?page=${pageNum}&query=${searchTerm}&per_page=${perPageNum}&client_id=${this.accessKey}&lang=en&lang=fr`; 
            const response = await fetch(url);
            const data = await response.json();
            const dataArray = this.extractData(data.results);
            if(dataArray.length > 0 ) {
                new ImgGallery(dataArray, [icons.expand, icons.favorite, icons.download]);  
            } else { alert('Found no images corresponding to your search'); }
        } catch (error) {
            alert('Failed to load image gallery...');
        }
    }
    static extractData(dataArray) {
        const result = [];
        dataArray.forEach(obj => {
            const newObj = {
                id: obj.id,
                title: obj.alt_description,
                img: obj.urls.regular,
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
            anchorTag.href = link
        }
        anchorTag.click();
    }
    static async fetchImgToDwnld(src) {
        const response = await fetch(src);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }
}




