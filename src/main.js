import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-3-socket.io';
import io from 'socket.io-client';
import env from './env';

const socket = new VueSocketIO({
    debug: true,
    connection: io(env.API_URL),
    vuex: {
        store
    },
});

createApp(App)
    .use(store)
    .use(router)
    .use(socket)
    .mount('#app')
