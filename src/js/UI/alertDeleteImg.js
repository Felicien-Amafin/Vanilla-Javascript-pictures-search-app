import { Alert } from './alert';
import { Ui } from './userInterface';

export class AlertDeleteImg extends Alert {
    //Create and display alert before img deletion
    constructor(btnArray, deleteFunc, activeColl, imgObj) {
        super();
        this.btnArray = btnArray;
        this.deleteFunc = deleteFunc;
        this.collName = activeColl.collName;
        this.userId = activeColl.userId;
        this.imgObj = imgObj;
        this.title = `Are you sure you want to delete this picture ?`;
        this.create(this.btnArray, this.title);
        this.addEvListener(btnArray);
    }
    addEvListener(btnArray) {
        btnArray.map((btn)=> {
            document.getElementById(`${btn}-id`).addEventListener('click', ()=> {
                if(`${btn}-id` === 'Yes-id') {
                    try {
                        this.deleteFunc(this.imgObj, this.collName, this.userId);
                        document.getElementById(`widget-${this.imgObj.id}`).remove();
                        this.removeAlert();
                        Ui.updateActiveColl(this.imgObj);
                        if(Ui.activeColl.data.length === 0) { 
                            Ui.changeGalleryTitle(`"${this.collName}"has been delete...`); 
                            Ui.deleteColl(`${this.collName}-cell`, this.collName, this.userId)
                        }
                    } catch(error) { alert("Sorry cant't delete picture..."); }
                } else { this.removeAlert(); }
            })
        })
    }
}