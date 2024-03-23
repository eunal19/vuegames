import router from './router'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App)

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
