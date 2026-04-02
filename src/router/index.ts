import { createRouter, createWebHashHistory } from 'vue-router'
import LangView from '../views/LangView.vue'
import { Lang } from '../constants/Lang'
import { setLocale } from '../i18n'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'choose-lang',
      component: LangView,
    },
    {
      path: '/:lang/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/:lang/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:lang/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue'),
    },
    {
      path: '/:lang/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
    },
    {
      path: '/:lang/game',
      name: 'game',
      component: () => import('../views/GameView.vue'),
    },
    {
      path: '/:lang/history',
      name: 'histoy',
      component: () => import('../views/HistoryView.vue'),
    },
  ],
})

const validLangs = new Set<string>(Object.values(Lang))

router.beforeEach(async (to) => {
  const lang = to.params.lang as string
  if (lang && validLangs.has(lang)) {
    await setLocale(lang as Lang)
  }
})
