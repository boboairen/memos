import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Memo from '../views/Memo.vue'
import MemoView from '../views/MemoView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/memo',
        name: 'Memo',
        component: Memo
    },
    {
        path: '/memoView',
        name: 'MemoView',
        component: MemoView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
