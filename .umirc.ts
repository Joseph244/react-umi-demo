import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // 首页
    { path: '/', redirect: '/login' },
    {
      path: '/user',
      component: '@/pages/user/index',
      wrappers: ['@/wrappers/auth'],
    },
    // exact表示是否严格匹配(默认true)，即 location 是否和 path 完全对应上,如此时/list/qa 也可匹配到当前/list路由
    { path: '/list', component: '@/pages/list/index', exact: false },
    { path: '/login', component: '@/pages/login/index' },
    {
      path: '/outlayout',
      component: '@/layouts/outLayout/index', // 父级组件
      routes: [
        // { path: '/outlayout/tables', component: '@/pages/tables/index' },
        { path: './tables', component: '@/pages/tables/index' },
      ],
    },
    {
      path: '/', // 由于此处命中的是根路由，所以 path: '/outlayout' 配置要放在前面，否则就会被此处跟路由命中
      component: '@/layouts/index', // 父级组件
      routes: [
        // 此处的list与上面的list冲突，框架会“先入为主”采用第一个路由
        { path: '/list', component: '@/pages/list/index' },
        { path: '/tables', component: '@/pages/tables/index' },
      ],
    },
  ],
  fastRefresh: {},
});
