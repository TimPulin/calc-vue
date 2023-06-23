import { createRouter, createWebHashHistory } from 'vue-router';
import PageCalc from '@/pages/PageCalc';

const routes = [
  {
    path: '/',
    name: 'calc',
    component: PageCalc,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
