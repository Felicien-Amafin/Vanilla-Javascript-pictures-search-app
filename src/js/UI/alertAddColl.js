import { Alert } from './alert';

export class AlertAddColl extends Alert {
    //Create and display alert after creating or updating collections
    constructor(btnArray, message) {
        super();
        this.btnName = btnArray[0];
        this.message = message;
        this.create(btnArray, this.message);
        this.addEvListener();
    }
    addEvListener() {
        const btn = document.getElementById(`${this.btnName}-id`);
        btn.addEventListener('click', ()=> {
            this.removeAlert();
        })
    }
}
