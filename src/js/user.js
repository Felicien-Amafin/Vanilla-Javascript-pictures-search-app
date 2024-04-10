import '../scss/main.scss';

//Show slidingSbubble
document.querySelector('.header__searchIcon').addEventListener('click', ()=> {
    document.querySelector('.slidingSbubble').classList.add('slidingSbubble__visible');
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
})
//Close slidingSbubble
document.querySelector('.slidingSbubble__cross').addEventListener('click', ()=> {
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__visible');
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
})
//Open menu
document.querySelector('.header__collectionBtn').addEventListener('click', ()=> {
    document.querySelector('.collectionsMenu').classList.remove('collectionsMenu--hidden');
    document.querySelector('.collectionsMenu').classList.add('collectionsMenu--visible');
})
//Close menu
document.querySelector('.collectionsMenu__cross').addEventListener('click', ()=> {
    document.querySelector('.collectionsMenu').classList.remove('collectionsMenu--visible');
    document.querySelector('.collectionsMenu').classList.add('collectionsMenu--hidden');
})