export const routes = [
  { path: '/', component: '@/pages/welcome/index' },
  {
    path: '/todo',
    component: '@/pages/todo/main',
    wrappers: ['@/wrappers/auth'],
    routes: [
      { path: '/todo/detail/:id', component: '@/pages/todo/detailPage/index' },
      { path: '/todo/list', component: '@/pages/todo/listPage/index' },
    ],
  },
];
