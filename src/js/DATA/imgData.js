import { Ui } from '../ui/userInterface';
import { Api } from './api';

export const galleryInit = [
    {title: 'Grouch', imgSrc: '/src/img/grouch.jpg', id: 1},
    {title: 'Elephant', imgSrc: '/src/img/elephant.jpg', id: 2},
    {title: 'Rock', imgSrc: '/src/img/rock.jpg', id: 3},
    {title: 'Mountain', imgSrc: '/src/img/mountain.jpg', id: 4},
    {title: 'Taxi', imgSrc: '/src/img/taxi.jpg', id: 5},
    {title: 'Lion', imgSrc: '/src/img/lion.jpg', id: 6},
    {title: 'Men spreading arms', imgSrc: '/src/img/MenSpreadingArms.jpg', id: 7},
    {title: 'Old women', imgSrc: '/src/img/oldWomen.jpg', id: 8},
    {title: 'Colored hands', imgSrc: '/src/img/coloredHands.jpg', id: 9},
    {title: 'Lack surrounded by mountains', imgSrc: '/src/img/lackAndMountains.jpg', id: 10},
    {title: 'Colored face', imgSrc: '/src/img/coloredFace.jpg', id: 11},
    {title: 'ToukTouk', imgSrc: '/src/img/touktouk.jpg', id: 12},
    {title: 'A painting of a face on wall', imgSrc: '/src/img/faceOnWall.jpg', id: 13},
    {title: 'Zebra', imgSrc: '/src/img/zebra.jpg', id: 14},
    {title: 'Zebra women', imgSrc: '/src/img/zebraWomen.jpg', id: 15},
    {title: 'Lack', imgSrc: '/src/img/lack.jpg', id: 16},
    {title: "Prima ballerina's feet", imgSrc: '/src/img/primaBallerina.jpg', id: 17}, 
]

export const icons = { 
    expand: { name: "expand", class: "fa-solid fa-expand", event: "click", prevDefault: false, func: Ui.displayImgModal },
    favorite: { name: "favorite", class: "fa-solid fa-heart", event: "click", prevDefault: false, func: Ui.displayCollForm },
    download: { name: "download", class: "fa-solid fa-download", event: "click", prevDefault: false, func: Api.downloadImg },
    delete: { name: "delete", class: "fa-regular fa-trash-can", event: "click", prevDefault: false, func: Ui.deleteImgWidget },
}
