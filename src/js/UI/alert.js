export class Alert {
    create(btnArray, title) {
        const root = document.getElementById('page');
        const alertModal = document.createElement('div');
        alertModal.classList.add('alertModal');
        alertModal.id = 'alertModal';
        alertModal.innerHTML = `
            <div class="alertModal__window none">
                <h2 class="alertModal__title">${title}</h2>
                <div class="alertModal__btnFlex">
                ${btnArray.map((btn)=> { 
                    return `<button class="btn tab" id="${btn}-id">${btn}</button>`; 
                    }) 
                }
                </div>
            </div>
        `
        root.insertAdjacentElement('beforeend', alertModal);
    }
}