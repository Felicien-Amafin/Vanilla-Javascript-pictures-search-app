import '../scss/main.scss';
//Show form modal
document.querySelector('.mainPage__btn').addEventListener('click', ()=> {
    document.getElementById('formModal').classList.remove('formModal--hidden');
    document.getElementById('formModal').classList.add('formModal--visible');
})
//Show user's page
document.getElementById('formValidation').addEventListener('click', ()=> {
    window.location.replace('/dist/user.html');
})