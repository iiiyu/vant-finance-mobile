import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainPage from '../view/main/MainPage'
import TabHome from '../view/main/tabs/TabHome'
import TabFinancial from '../view/main/tabs/TabFinancial'
import TabFund from '../view/main/tabs/TabFund'
import TabInsurance from '../view/main/tabs/TabInsurance'
import TabMine from '../view/main/tabs/TabMine'
import ContactPage from '../view/contact/ContactPage'

const SettingsPage = r =>
  require.ensure(
    [],
    () => r(require('../view/mine/SettingsPage')),
    'SettingsPage'
  )
const IFrameWebPage = r =>
  require.ensure(
    [],
    () => r(require('../view/common/IFrameWebPage')),
    'IFrameWebPage'
  )
const TestCasePage = r =>
  require.ensure(
    [],
    () => r(require('../view/mine/TestCasePage')),
    'TestCasePage'
  )
const ForumPage = r =>
  require.ensure(
    [],
    () => r(require('../view/discover/ForumPage')),
    'ForumPage'
  )
const MessagePage = r =>
  require.ensure(
    [],
    () => r(require('../view/mine/MessagePage')),
    'MessagePage'
  )
const MessageDetail = r =>
  require.ensure(
    [],
    () => r(require('../view/mine/MessageDetail')),
    'MessageDetail'
  )
const ProductDetail = r =>
  require.ensure(
    [],
    () => r(require('../view/product/ProductDetail')),
    'ProductDetail'
  )
const FinancialProductDetail = r =>
  require.ensure(
    [],
    () => r(require('../view/product/FinancialProductDetail')),
    'FinancialProductDetail'
  )
const FundProductDetail = r =>
  require.ensure(
    [],
    () => r(require('../view/product/FundProductDetail')),
    'FundProductDetail'
  )
const InsuranceProductDetail = r =>
  require.ensure(
    [],
    () => r(require('../view/product/InsuranceProductDetail')),
    'InsuranceProductDetail'
  )
const LoginPage = r =>
  require.ensure([], () => r(require('../view/login/LoginPage')), 'LoginPage')
const GestureCreate = r =>
  require.ensure(
    [],
    () => r(require('../view/login/GestureCreate')),
    'GestureCreate'
  )

const routes = [
  { path: '*', redirect: '/main' },
  {
    name: 'main',
    redirect: '/main/home',
    component: MainPage,
    children: [
      {
        name: 'home',
        path: 'home',
        component: TabHome,
        meta: { keepAlive: true }
      },
      {
        name: 'finance',
        path: 'finance',
        component: TabFinancial,
        meta: { keepAlive: true }
      },
      {
        name: 'fund',
        path: 'fund',
        component: TabFund,
        meta: { keepAlive: true }
      },
      {
        name: 'insurance',
        path: 'insurance',
        component: TabInsurance,
        meta: { keepAlive: true }
      },
      {
        name: 'mine',
        path: 'mine',
        component: TabMine,
        meta: { keepAlive: true }
      }
    ],
    meta: { keepAlive: true }
  },
  { name: 'LoginPage', component: LoginPage },
  { name: 'GestureCreate', component: GestureCreate },
  { name: 'SettingsPage', component: SettingsPage },
  { name: 'IFrameWebPage', component: IFrameWebPage },
  { name: 'TestCasePage', component: TestCasePage },
  { name: 'ForumPage', component: ForumPage },
  { name: 'MessagePage', component: MessagePage },
  { name: 'ProductDetail', component: ProductDetail },
  { name: 'FinancialProductDetail', component: FinancialProductDetail },
  { name: 'FundProductDetail', component: FundProductDetail },
  { name: 'InsuranceProductDetail', component: InsuranceProductDetail },
  { name: 'MessageDetail', component: MessageDetail },
  {
    name: 'Contact',
    path: '/contact',
    component: ContactPage,
    meta: { keepAlive: true }
  }
]

// 懒得写path，给他们自动生成一个，和name同名
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new VueRouter({ routes })

// 生命周期之前
router.beforeEach((to, from, next) => {
  // 保存个路由来路，以备不时之需
  localStorage.setItem('fromPage', from.name)
  next()
})

//生命周期之后
router.afterEach((to, from) => {
  // 滑动到顶吧
  window.scrollTo(0, 0)
})

export default router
