import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Information from './components/Information.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/about', component: About},
        {path: '/information', component: Information},
        {path: '*', component: Home},
    ]
})
