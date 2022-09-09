import { createRouter, createRouterMatcher, createWebHashHistory } from 'vue-router'

import Clientes from '../components/Clientes'
import Empleados from '../components/Empleados'

const routes = [
    { path: '/', component: Clientes },
    { path: '/clientes', component: Clientes },
    { path: '/empleados', component: Empleados },
    { path: '/:pathMatch(.*)*', component: Clientes }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router