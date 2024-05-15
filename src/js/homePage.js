import '../scss/main.scss';
import { AuthForm } from './ui/authForm';

export class App {
    static init() { new AuthForm('page'); }
}
App.init();


