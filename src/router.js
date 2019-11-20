import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Resume from './pages/resume'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path:'/Resume',
            component: Resume
        }
    ]
}) 