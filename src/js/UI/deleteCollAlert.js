import { Alert } from './alert';

export class DeleteCollAlert extends Alert {
    constructor(btnArray, deleteFunc, collName) {
        super();
        this.deleteFunc = deleteFunc;
        this.collName = collName;
        this.title = `Are you sure you want to delete "${this.collName}" ?`;
        this.create(btnArray, this.title);
        this.addEvListener(btnArray, this.collName);
    }
    addEvListener(btnArray, collName) {
        btnArray.map((btn)=> {
            document.getElementById(`${btn}-id`).addEventListener('click', ()=> {
                if(`${btn}-id` === 'Yes-id') {
                    this.deleteFunc(`${collName}-remove`, collName);
                    this.removeAlert();
                } else { this.removeAlert(); }
            })
        })
    }
    removeAlert() {
        document.getElementById('alertModal').remove();
    }
}