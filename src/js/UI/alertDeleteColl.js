import { Alert } from './alert';
import { Ui } from './userInterface';

export class AlertDeleteColl extends Alert {
    //Create and display alert before collection deletion
    constructor(btnArray, deleteFunc, collName, userId) {
        super();
        this.btnArray = btnArray;
        this.deleteFunc = deleteFunc;
        this.collName = collName;
        this.userId = userId;
        this.title = `Are you sure you want to delete "${this.collName}" ?`;
        this.create(this.btnArray, this.title);
        this.addEvListener(this.btnArray, this.collName);
    }
    addEvListener(btns, collName) {
        btns.map((btn)=> {
            document.getElementById(`${btn}-id`).addEventListener('click', ()=> {
                if(`${btn}-id` === 'Yes-id') {
                    //If "Yes" button is clicked
                    window.scrollY > 0 ? scrollTo(0,0) : null;
                    this.deleteFunc(`${collName}-cell`, collName, this.userId);
                    if(history.state.keyword === collName) {
                        Ui.changeGalleryTitle(`"${collName}" has been deleted...`);
                        Ui.deleteGalleryContent();
                    }
                    this.removeAlert();
                } else { this.removeAlert(); } //If "No" button is clicked
            })
        })
    }
}