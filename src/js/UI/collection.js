import { AlertDeleteColl } from "./alertDeleteColl";
import { Database } from "../data/database";
import { Ui } from "./userInterface";
import { ImgGallery } from "./imgGallery";
import { icons } from '../data/imgData';
import { route } from '../router';

export class Collection {
    constructor(collName, root, position, userId) {
        this.userId = userId;
        this.collName = collName;
        this.position = position;
        this.root = document.getElementById(`${root}`);
        this.create(this.collName);
    }
    create(collName) {
        const collection = document.createElement('ul');
        collection.classList.add('menuCell');
        collection.id= `${collName}-cell`;
        collection.innerHTML = `
            <li class="menuCell__text elementHover" id="${collName}">${collName}</li>
            <li class="menuCell__icon elementHover" id="${collName}-remove"><i class="fa-regular fa-trash-can"></i></li>
        `
        this.root.insertAdjacentElement(`${this.position}`, collection);
        this.addEvList(collName);
    }
    addEvList(collName) {
        const ids = [`${collName}`, `${collName}-remove`];
        ids.map((id)=> {
            document.getElementById(`${id}`).addEventListener('click', ()=> {
                if(id === `${collName}`) { 
                    const state = { mode: 'collection', keyword: `${collName}` };
                    route(state);
                    document.getElementById('menu').classList.remove('menu--visible');
                    this.loadCollContent(collName); //Load collection from database
                } 
                if(id === `${collName}-remove`) { 
                    //Display Alert to confirm deletion 'when trash icon' is clicked
                    new AlertDeleteColl(['Yes', 'No'], Ui.deleteColl, `${collName}`, this.userId); 
                }
            })
        })
    }
    async loadCollContent(collName) {
        try {
            window.scrollY > 0 ? scrollTo(0,0) : null;
            const data = await Database.getColl(collName, this.userId);
            Ui.activeColl.collName = collName;
            Ui.activeColl.data = data.pictures; 
            Ui.activeColl.userId = this.userId;
            Ui.showLoadingMess();
            Ui.hideStartingPageElmts(); //If needed
            Ui.deleteGalleryContent();
            Ui.hideLoadMoreBtn(); //If needed
            Ui.changeGalleryTitle(`"${collName}" collection`);
            new ImgGallery(data.pictures, [icons.expand, icons.delete, icons.download]);
            Ui.hideLoadingMess();
        } catch {
            alert(`Cannot load ${collName}`)
        }
    }
}