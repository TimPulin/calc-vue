import { createRouter, createWebHashHistory } from 'vue-router';
import PageCalc from '@/pages/PageCalc';
import PageGuideValue from '@/pages/PageGuideValue';
import PageNotFound from '@/pages/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'calc',
    component: PageCalc,
  },
  {
    path: '/guide-value',
    name: 'guide-value',
    component: PageGuideValue,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
