import '../scss/main.scss';

document.querySelector('.mainPage__btn').addEventListener('click', ()=> {
    document.getElementById('formModal').classList.remove('formModal--hidden');
    document.getElementById('formModal').classList.add('formModal--visible');
})