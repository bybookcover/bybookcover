import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/contact',
            component:Contact
        },
        {
            path:'/about',
            component:About
        },
    ]
})