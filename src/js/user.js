import '../scss/main.scss';
import { Database } from "./data/database";


class User {
    static user = JSON.parse(sessionStorage.getItem('user'));
    static init() { 
       this.addEventLstns();
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
        document.querySelector('.header__collectionBtn').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.toggle('menu--visible');
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

/* class User {
    static form = new CollectionForm();
    static init() {
       

        //Open formModal
        document.getElementById('collectionIcon').addEventListener('click', ()=> {
            document.getElementById('formModal').classList.toggle('formModal--slide');
        })
    }
} */



