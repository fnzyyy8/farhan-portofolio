import {createApp} from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import{createRouter,createWebHistory} from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const app = createApp(App)

const router = createRouter({
    routes :[
        {
            path : "/",
            component : Home
        },
        {
            path : "/about",
            component : About
        }
    ],
    history: createWebHistory()
})


app.use(router)


app.mount('#app')
