import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import User from '../components/User'
import Student from '../components/Student'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Home'},
    { path: '/Home', name: 'Home', component: Home},
    { path: '/User', name: 'User', component: User},
    { path: '/Student', name: 'student', component: Student}
  ]
})
