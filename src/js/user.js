import '../scss/main.scss';
import { ImgGallery } from './ui/imgGallery'
import { gallery, icons } from './data/imgData';
import { Api } from './data/api';
import { Ui } from './ui/userInterface';
import { CollectionForm } from './ui/collectionForm';
import { ImgModal } from './ui/imgModal';
import { CollectionsList } from './ui/CollectionsList';
import { AuthForm } from './ui/authForm';
import { Database } from './data/database';
import { route, handlePage } from './router';

export class User {
    static  init() { 
       //Display authentication form + render img gallery on user's page + pushState()
       new AuthForm('page');
       Ui.startingPGallery = new ImgGallery(gallery, [icons.expand, icons.favorite, icons.download]);
       const state = { mode: 'startingPage', keyword: ''};
       window.history.pushState(state, '', null);
    }
    static unlockUserPage(userData, userId) {
        //Remove authForm + init user's page with Ui components
        document.getElementById('formModal').remove(); 
        Ui.collForm = new CollectionForm('page', userData, userId);
        Ui.collList = new CollectionsList(userData.collectionsNames, userId);
        Ui.imgModal = new ImgModal('page');
        let userName =  userData.userName; 
        userName = userName.length > 8 ? `${userName.substring(0, 9)}...`: userName;
        document.getElementById('userName-header').textContent = userName;
        this.addEventLstns();
    }
    static addEventLstns() {
        window.addEventListener('popstate', (event)=> { 
            //Add popstate listener on window to handle page location
            const state = event.state;
            handlePage(state);
        })
        document.getElementById('h1').addEventListener('click', ()=> {
            const page = { mode: 'startingPage', keyword: ''};
            route(page);
            Ui.displayStartingPage();
        })
        //Load new image search 
        document.getElementById('headerSbubble').addEventListener('submit', (event)=> {
            //Load new image search 
            event.preventDefault();
            Api.newImgSearch('headerSbInput');
        })
        document.getElementById('slidingSbubble').addEventListener('submit', (event)=> {
            //Load new image search 
            event.preventDefault();
            Api.newImgSearch('slidingSbInput');
        })
        //Load more images
        document.getElementById('loadMoreBtn').addEventListener('click', ()=> { Api.loadMoreImg(); })
        document.getElementById('headerSearchIcon').addEventListener('click', ()=> {
            //Show slidingSbubble
            document.querySelector('.slidingSbubble').classList.add('slidingSbubble__visible');
            document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
        })
        document.getElementById('slidingSbubbleCross').addEventListener('click', ()=> {
            //Close slidingSbubble
            document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__visible');
            document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
        })
        const classArray = ['header__collectionBtn', 'header__collectionIcon'];
        classArray.map((className)=>{
            //Open menu
            document.querySelector(`.${className}`).addEventListener('click', ()=> {
                document.querySelector('.menu').classList.toggle('menu--visible');
            })
        })
        document.getElementById('menuCross').addEventListener('click', ()=> {
            //Close menu
            document.getElementById('menu').classList.toggle('menu--visible');
        })
        //Log out
        document.getElementById('headerLogout').addEventListener('click', Database.logOut);
    }
}
User.init();




