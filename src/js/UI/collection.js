import { DeleteCollAlert } from "./deleteCollAlert";
import { Database } from "../data/database";
import { Ui } from "./userInterface";

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
                    console.log('Loading collection'); //Load collection from database
                } else { 
                    //Display Alert to confirm deletion 'when trash icon' is clicked
                    new DeleteCollAlert(['Yes', 'No'], this.delete.bind(this), `${collName}`); 
                }
            })
        })
    }
    async delete(cellToRemove, collName) {
        try {
            const collectionsNames = Ui.collForm.collectionsNames;
            const newArray = collectionsNames.filter((name)=> { 
                return name !== collName;
            })
            await Database.deleteColl(newArray, collName, this.userId); //Remove Collection from Database
            document.getElementById(`${cellToRemove}`).remove(); //Remove collection from the DOM
            Ui.collForm.collectionsNames = [...newArray]; //Update collectionNames in collectionForm 
            Ui.collList.handleDefaultMess(newArray); //Display default message if needed
        } catch(error) {
            alert("Sorry can't delete collection");
        }
    }
}