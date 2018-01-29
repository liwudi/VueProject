import Vue from 'vue'
import Router from 'vue-router'

//page
import Main from '../views/main/Main'
import GoShoping from '../views/main/goShoping/GoShoping'
import ShopingCar from '../views/main/shopingCar/ShopingCar'
import MyShop from '../views/main/myShop/MyShop'
import UserCenter from '../views/main/userCenter/UserCenter'

import LoginRegister from '../views/loginRegister/LoginRegister'
import Start from '../views/startPage/StartPage'
import ChangePassword from '../views/changePassword/ChangePassword'

//other
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/',component: GoShoping },
      { path: '/goShoping',component: GoShoping },
      { path: '/shopingCar',component: ShopingCar },
      { path: '/myShop',component: MyShop },
      { path: '/userCenter',component: UserCenter }
    ]
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
