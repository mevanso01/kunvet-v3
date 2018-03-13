import Config from 'config';
import Axios from 'axios';

console.log(Config);
console.log(Config.get('serverUrl'));

Axios.defaults.withCredentials = true;
Axios.defaults.baseURL = Config.get('serverUrl');
