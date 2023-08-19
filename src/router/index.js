import { createRouter, createWebHashHistory } from 'vue-router';
import PageMain from '@/pages/PageMain';
import PageCalc from '@/pages/PageCalc';
import PageGuideValue from '@/pages/PageGuideValue';
import PageDonate from '@/pages/PageDonate';
import PageNotFound from '@/pages/PageNotFound';
import GuideTableJumps from '@/components/guide-value/GuideTableJumps';
import GuideTableSpins from '@/components/guide-value/GuideTableSpins';
import GuideTableSteps from '@/components/guide-value/GuideTableSteps';

const routes = [
  {
    path: '/',
    name: 'main',
    component: PageMain,
  },
  {
    path: '/calc',
    name: 'calc',
    component: PageCalc,
  },
  {
    path: '/guide-value',
    name: 'guide-value',
    component: PageGuideValue,
    children: [
      {
        path: '',
        name: 'empty-guide',
        redirect: {
          name: 'jumps',
        },
      },
      {
        name: 'jumps',
        path: 'jumps',
        component: GuideTableJumps,
      },

      {
        path: 'spins',
        name: 'spins',
        component: GuideTableSpins,
      },
      {
        path: 'steps',
        name: 'steps',
        component: GuideTableSteps,
      },
    ],
  },
  {
    path: '/donation',
    name: 'donation',
    component: PageDonate,
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
