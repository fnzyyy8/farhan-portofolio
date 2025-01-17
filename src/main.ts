import {createApp} from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'aos/dist/aos.css'
import AOS from 'aos'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Feedback from "./components/Feedback.vue";
import Connect from './components/Connect.vue';

const app = createApp(App)

const router = createRouter({
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/review",
            component: Feedback,
            meta: {hideLayout: true}
        },
        {
            path: "/connect",
            component: Connect,
            meta: {hideLayout: true}
        }
    ],
    history: createWebHistory()
})

AOS.init({
    startEvent: 'load'
})

app.use(router)

app.mount('#app')
