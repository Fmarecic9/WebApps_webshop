import {createRouter, createWebHistory} from 'vue-router'


import ProizvodiAll from './components/ProizvodiAll.vue'
import Proizvod from './components/Proizvod.vue'

const routes = [
    {path: '/', redirect: '/proizvodi'},
    { path: '/proizvodi/:id', name: 'Proizvod', component: Proizvod }, 
    { path: '/proizvodi', name: 'ProizvodiAll', component: ProizvodiAll },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router