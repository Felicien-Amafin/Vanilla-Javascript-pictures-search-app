import '../scss/main.scss';
import { Database } from "./data/database";
import { ImgGallery } from './ui/imgGallery'
import { galleryInit } from './data/imgGalleryInit';


export class User {
    static user;
    static init() { 
       this.addEventLstns();
       this.user = JSON.parse(sessionStorage.getItem('user'));
       let userName =  this.user[1].userName;
       userName = userName.length > 8 ? `${userName.substring(0, 9)}...`: userName;
       document.querySelector('.header__userName').textContent = userName;
       new ImgGallery(galleryInit);
    }
    static addEventLstns() {
        //Show slidingSbubble
        document.querySelector('.header__searchIcon').addEventListener('click', ()=> {
        document.querySelector('.slidingSbubble').classList.add('slidingSbubble__visible');
        document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
        })
        //Close slidingSbubble
        document.querySelector('.slidingSbubble__cross').addEventListener('click', ()=> {
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
        document.querySelector('.menu__cross').addEventListener('click', ()=> {
            document.querySelector('.menu').classList.toggle('menu--visible');
        })
        //Log out
        document.querySelector('.header__logOutBtn').addEventListener('click', Database.logOut);
    }
}
User.init()




