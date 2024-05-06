import '../scss/main.scss';
import { Auth } from './ui/auth';

export class App {
    static init() { new Auth('page'); }
}
App.init();


