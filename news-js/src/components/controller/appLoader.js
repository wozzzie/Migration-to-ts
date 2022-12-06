import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ce76279315204d40a32e3791a75a6767',
        });
    }
}

export default AppLoader;
