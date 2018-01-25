import Vue from 'vue'
import Router from 'vue-router'

//page
import Main from '../views/main/Main'
import LoginRegister from '../views/loginRegister/LoginRegister'
import Start from '../views/startPage/StartPage'
import ChangePassword from '../views/changePassword/ChangePassword'

//other
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },{
    path: '/loginRegister',
    component:LoginRegister
  },{
    path: '/start',
    component: Start
  },{
    path: './changePassword',
    component: ChangePassword
  },{
    path: '*',
    redirect: '/loginRegister'
  }
]
export default new Router({
  routes: routes
})
