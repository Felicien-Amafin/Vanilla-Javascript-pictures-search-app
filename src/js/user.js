import '../scss/main.scss';
import { Database } from "./data/database";
/* import { CollectionForm } from './delete/collectionForm'; */

/* //Show slidingSbubble
document.querySelector('.header__searchIcon').addEventListener('click', ()=> {
    document.querySelector('.slidingSbubble').classList.add('slidingSbubble__visible');
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
})
//Close slidingSbubble
document.querySelector('.slidingSbubble__cross').addEventListener('click', ()=> {
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__visible');
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
}) */
/* class User {
    static form = new CollectionForm();
    static init() {
        //Open menu
        document.querySelector('.header__collectionBtn').addEventListener('click', ()=> {
            document.querySelector('.menu').classList.toggle('menu--visible');
        })
        //Close menu
        document.querySelector('.menu__cross').addEventListener('click', ()=> {
            document.querySelector('.menu').classList.toggle('menu--visible');
        })

        //Open formModal
        document.getElementById('collectionIcon').addEventListener('click', ()=> {
            document.getElementById('formModal').classList.toggle('formModal--slide');
        })
    }
} */
/* User.init(); */

document.querySelector('.header__logOutBtn').addEventListener('click', Database.logOut);
