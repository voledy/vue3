import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'home', component: () => import('/@/views/home/index.vue')},
    { path: '/home', name: 'home', component: () => import('/@/views/home/index.vue')}
];

export default createRouter({
    history: createWebHistory(),
    routes
})



