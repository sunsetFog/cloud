import Vue from 'vue'
import Router from 'vue-router'
import PriceManage from '@/pages/priceManage/PriceManage'
import Other from '@/pages/other/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/root/',
  routes: [
    {
      path: '/',
      name: 'PriceManage',
      component: PriceManage
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
