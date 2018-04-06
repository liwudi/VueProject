import Vue from 'vue'
import Router from 'vue-router'

//page
const Main = r => require.ensure([], () => r(require('../views/main/Main')))
//import Main from '../views/main/Main';
//const Main = () => import(/* webpackChunkName: "Main-page" */ '../views/main/Main');

import GoShoping from '../views/main/goShoping/GoShoping'
import Classify from '../views/main/goShoping/classify/Classify';
import ShopingCar from '../views/main/shopingCar/ShopingCar'
import MyShop from '../views/main/myShop/MyShop'
import ShopName from '../views/main/myShop/shopName/ShopName'
import ShopSet from '../views/main/myShop/shopSet/ShopSet';
import UserCenter from '../views/main/userCenter/UserCenter';
import MyOrder from '../views/main/userCenter/myOrder/MyOrder';
import SetPage from '../views/main/userCenter/setPage/SetPage';

import LoginRegister from '../views/loginRegister/LoginRegister'
import Start from '../views/startPage/StartPage'
import ChangePassword from '../views/changePassword/ChangePassword'
import SetPassWord from '../views/changePassword/setPassWord/SetPassWord'
import GetCode from '../views/changePassword/getCode/GetCode'

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
      {
        path: '/myShop',
        component: MyShop,
      },
      { path: '/userCenter',component: UserCenter }
    ]
  }, {
    path: '/shopSet',
    component: ShopSet
  }, {
    path: '/shopName',
    component: ShopName
  },{
    path: '/myOrder',
    component: MyOrder
  },{
    path: '/setPage',
    component: SetPage
  }
  ,{
    path: '/loginRegister',
    component:LoginRegister
  },{
    path: '/start',
    component: Start
  },{
    path: '/changePassword',
    component: ChangePassword
  },{
    path: '/setpassword',
    component: SetPassWord
  },{
    path: '/getcode',
    component: GetCode
  },{
    path: '/classify/:id',
    component: Classify,
    props: true
  },{
    path: '*',
    redirect: '/loginRegister'
  }
]
export default new Router({
  routes: routes
})
