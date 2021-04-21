export default [
  {
    path: '/login',
    component: '@/pages/Login',
  },
  {
    path: '/home',
    component: '@/pages/Home',
    wrappers: ['@/untils/auth'],
  },
  {
    path: '/mine',
    component: '@/pages/Mine',
    wrappers: ['@/untils/auth'],
  },
];
