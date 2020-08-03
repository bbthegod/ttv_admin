import axios from 'axios';
import * as url from './url';
const instance = axios.create({});
import { CHECK } from './url';
instance.interceptors.request.use(
  async config => {
    try {
      const token = localStorage.getItem('token');
      const checking = await axios({
        method: 'get',
        headers: { Authorization: `Bearer ${token}` },
        url: CHECK,
      });
      if (checking.status == 200) {
        if (config.url.startsWith('/')) {
          config.url = `${url.BASE_URL}${config.url}`;
        }
        if (config.url.startsWith(url.BASE_URL)) {
          if (!token) {
            window.location = '/login';
            localStorage.clear();
          }
          config.headers.common['Authorization'] = 'Bearer ' + token;
        }
        return config;
      } else {
        window.location = '/login';
        localStorage.clear();
      }
    } catch (e) {
      window.location = '/login';
      localStorage.clear();
    }
  },
  error => Promise.reject(error),
);
export default instance;
