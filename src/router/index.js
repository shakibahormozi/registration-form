import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupFirst from '../views/Signup/SignupFirst.vue';
import LoginFirst from '../views/Login/LoginFirst.vue';
import ProfileMain from '../views/Profile/ProfileMain.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginFirst,

  },
  {
    path: '/SignupFirst',
    name: 'SignupFirst',
    component:SignupFirst,
  },
  {
    path: '/ProfileMain',
    name: 'ProfileMain',
    component:ProfileMain,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

