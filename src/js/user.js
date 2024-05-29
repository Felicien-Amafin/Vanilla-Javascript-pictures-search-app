import '../scss/main.scss';
import { Database } from './data/database';
import { ImgGallery } from './ui/imgGallery'
import { galleryInit, icons } from './data/imgData';
import { Api } from './data/api';
import { CollectionForm } from './ui/collectionForm';
import { ImgModal } from './ui/imgModal';
import { Ui } from './ui/userInterface';

class User {
    static user;
    
    static init() { 
       Ui.collForm = new CollectionForm('page');
       Ui.imgModal = new ImgModal('page');
       this.addEventLstns();
       this.user = JSON.parse(sessionStorage.getItem('user'));
       let userName =  this.user[1].userName;
       userName = userName.length > 8 ? `${userName.substring(0, 9)}...`: userName;
       document.getElementById('userName').textContent = userName;
       new ImgGallery(galleryInit, [icons.expand, icons.favorite, icons.download]);
       
    }
    static addEventLstns() {
        //Load new image search 
        document.getElementById('headerSbubble').addEventListener('submit', (event)=> {
            event.preventDefault();
            Api.newImgSearch('headerSbInput');
        })
        document.getElementById('slidingSbubble').addEventListener('submit', (event)=> {
            event.preventDefault();
            Api.newImgSearch('slidingSbInput');
        })
        //Load more image  
        document.getElementById('loadMoreBtn').addEventListener('click', ()=> { Api.loadMoreImg(); })
        //Show slidingSbubble
        document.getElementById('headerSearchIcon').addEventListener('click', ()=> {
        document.querySelector('.slidingSbubble').classList.add('slidingSbubble__visible');
        document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
        })
        //Close slidingSbubble
        document.getElementById('slidingSbubbleCross').addEventListener('click', ()=> {
        document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__visible');
        document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
        })
        //Open menu
        const classArray = ['header__collectionBtn', 'header__collectionIcon'];
        classArray.map((className)=>{
            document.querySelector(`.${className}`).addEventListener('click', ()=> {
                document.querySelector('.menu').classList.toggle('menu--visible');
            })
        })
        //Close menu
        document.getElementById('menuCross').addEventListener('click', ()=> {
            document.getElementById('menu').classList.toggle('menu--visible');
        })
        //Log out
        document.getElementById('headerLogout').addEventListener('click', Database.logOut);
    }
}
User.init()




