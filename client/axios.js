import Config from 'config';
import Axios from 'axios';

Axios.defaults.withCredentials = true;
Axios.defaults.baseURL = Config.serverUrl;
