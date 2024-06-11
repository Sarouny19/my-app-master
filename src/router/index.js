import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    component: () => import('../components/Home.vue'),
    children: [{
      path: '/index',
      name: 'index',
      meta: { title: '系统首页' },
      component: () => import('../views/Index/Index.vue')
    },
    {
      path: '/weatherstation',
      name: 'weatherstation',
      meta: { title: '气象站' },
      component: () => import('../views/WeatherStation/WeatherStation.vue')
    },
    {
      path: '/soil',
      name: 'soil',
      meta: { title: '土壤指标' },
      component: () => import('../views/Soil/Soil.vue')
    },
    {
      path: '/greenhouse',
      name: 'greenhouse',
      meta: { title: '温室环境参数' },
      component: () => import('../views/Greenhouse/Greenhouse.vue')
    },
    {
      path: '/crops',
      name: 'crops',
      meta: { title: '农作物生长参数' },
      component: () => import('../views/Crops/Crops.vue')
    },
    {
      path: '/remotecontrol',
      name: 'remotecontrol',
      meta: { title: '远程控制' },
      component: () => import('../views/RemoteControl/RemoteControl.vue')
    },
    {
      path: '/video',
      name: 'video',
      meta: { title: '现场监控' },
      component: () => import('../views/Video/Video.vue')
    },
    {
      path: '/brain',
      name: 'brain',
      meta: { title: '智慧大脑' },
      component: () => import('../views/IntellectualBrain/IntellectualBrain.vue')
    },
    {
      path: '/equipment',
      name: 'equipment',
      meta: { title: '农业设备' },
      component: () => import('../views/Equipment/Equipment.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      meta: { title: '农田管理' },
      component: () => import('../views/Manage/Manage.vue')
    },
    {
      path: '/farmland',
      name: 'farmland',
      meta: { title: '农田数据管理' },
      component: () => import('../views/Farmland/Farmland.vue')
    },
    {
      path: '/alertlog',
      name: 'alertlog',
      meta: { title: '警报日志' },
      component: () => import('../views/Dashboard/AlertLog.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { title: '仪表板' },
      component: () => import('../views/Dashboard/Dashboard.vue')
    },
    {
      path: '/weatherforecast',
      name: 'weatherforecast',
      meta: { title: '气象预测' },
      component: () => import('../views/Dashboard/WeatherForecast.vue')
    },
    {
      path: '/rainfallforecast',
      name: 'rainfallforecast',
      meta: { title: '降雨预测' },
      component: () => import('../views/Dashboard/RainfallForecast.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录界面' },
    component: () => import('../views/Login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, from, next) => {
  //判断是否有标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
  //判断用户是否登录，如果没登录则进入登录页
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('user_token');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
})

export default router
