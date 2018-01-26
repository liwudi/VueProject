import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/TheHomePage/main'
import ForgetPassword1 from '@/components/TheHomePage/ForgetPassword/ForgetPassword1'
import ForgetPassword2 from '@/components/TheHomePage/ForgetPassword/ForgetPassword2'
import ForgetPassword3 from '@/components/TheHomePage/ForgetPassword/ForgetPassword3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/ForgetPassword1',
      name: 'ForgetPassword1',
      component: ForgetPassword1
    },
    {
      path: '/ForgetPassword2',
      name: 'ForgetPassword2',
      component: ForgetPassword2
    },
    {
      path: '/ForgetPassword3',
      name: 'ForgetPassword3',
      component: ForgetPassword3
    }
  ]
})
