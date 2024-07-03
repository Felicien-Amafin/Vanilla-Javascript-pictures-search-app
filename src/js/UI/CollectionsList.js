import { Collection } from "./collection";

export class CollectionsList {
    constructor(collectionsNames, userId) {
        this.userId = userId;
        this.collectionsNames = collectionsNames;
        this.init(this.collectionsNames);
    }
    init(collectionsNames) { 
        // Initializes collections' list when page loads
        if(collectionsNames.length === 0) { 
            this.handleDefaultMess(collectionsNames);
            return;
        }
        collectionsNames.forEach(collectionName => { 
            new Collection(collectionName, 'collectionsList', 'beforeend', this.userId) ;
        });
    }
    addCollection(collectionsNames, collName) {
        //Insert new collection cell in existing collection's list 
        const collNameIndex = collectionsNames.findIndex((name)=> { return name === `${collName}` });
        const prevIndex = collNameIndex - 1;
        const root = `${collectionsNames[prevIndex]}-cell`;
        if(prevIndex > -1) {
            new Collection(collName, root, 'afterend', this.userId);
        } else {
            new Collection(collName, 'collectionsList', 'afterbegin', this.userId);
        }
    }
    handleDefaultMess(collectionsNames) { 
        //Display default message if no collections in collection's list
        const collectionsList = document.getElementById('collectionsList');
        const defaulftMess = `No collections yet...`;
        if(collectionsNames.length === 0 && collectionsList.innerHTML === `${defaulftMess}`) {
            collectionsList.innerHTML = '';
        }else if(collectionsNames.length === 0) { 
            collectionsList.innerHTML = `${defaulftMess}`; 
        }
    }
}