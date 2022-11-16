import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import clickOutside from './helpers/outside'

import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import VueCookies from 'vue3-cookies'

createApp(App)
.use(store)
.use(VueSplide)
.use(VueCookies, {expireTimes: '7d',secure: true,sameSite: "None"})
.directive('click-outside',clickOutside)
.use(router)
.mount('#app')
