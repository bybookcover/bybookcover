import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Products from '@/pages/Products'
import Application from '@/pages/Application'
import New from '@/pages/New'

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/products',
            component:Products
        },
        {
            path:'/new',
            component:New
        },
        {
            path:'/application',
            component:Application
        },
        {
            path:'/contact',
            component:Contact
        }
    ]
})