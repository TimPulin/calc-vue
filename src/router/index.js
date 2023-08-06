import { createRouter, createWebHashHistory } from 'vue-router';
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
        name: 'spins',
        path: 'spins',
        component: GuideTableSpins,
      },
      {
        name: 'steps',
        path: 'steps',
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
