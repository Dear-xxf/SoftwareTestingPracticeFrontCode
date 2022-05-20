import { createRouter, createWebHashHistory } from 'vue-router'
import testpage from "./components/test-page.vue"

const routes = [
    {
        path: '/testpage',
        name: 'testpage',
        component: testpage,
        //路由嵌套
        // children:[
        //     {path: '/testpage/menu1',component: () => import('./components/triangle.vue')},
        //     {path: '/testpage/menu2',component: () => import('./components/permanentCalendar.vue')},
        // ]
    },
    {
        path: '/triangle',
        component: () => import('./components/triangle.vue')
    },
    {
        path: '/permanentCalendar',
        component: () => import('./components/permanentCalendar.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router