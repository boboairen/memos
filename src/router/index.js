import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ToDo from '../views/ToDo.vue'
import Memo from '../views/Memo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/todo',
        name: 'ToDo',
        component: ToDo
    },
    {
        path: '/memo',
        name: 'Memo',
        component: Memo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
