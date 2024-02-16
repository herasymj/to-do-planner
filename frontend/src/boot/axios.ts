import axios from 'axios';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  axios.defaults.baseURL = 'http://localhost:3000';
  app.provide('axios', app.config.globalProperties.$axios);
});
