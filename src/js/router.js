import { Ui } from './ui/userInterface';
import { Api } from './data/api';

export function route(state){
    if(history.state.mode === 'collection') {
        if(history.state.keyword !== state.keyword) {
            window.history.pushState(state, '', null);
        }
        return;
    }
    if(history.state.keyword !== state.keyword) {
        window.history.pushState(state, '', null);
    }
}
export async function handlePage(state) {
    if(state.mode === 'startingPage') {
        Ui.displayStartingPage();
    }
    if(state.mode === 'search') {
        Api.loadSearchResults(state.keyword);
    }
    if(state.mode === 'collection') {
        const collection = document.getElementById(`${state.keyword}`);
        if(!collection) { 
            //If collection doesn't exist
            Ui.hideStartingPageElmts(); // If needed
            Ui.changeGalleryTitle(`"${state.keyword}" has been deleted...`);
            Ui.deleteGalleryContent(); // If needed
            Ui.hideLoadMoreBtn(); // If needed
            return;
        }
        collection.click();
    }
}
