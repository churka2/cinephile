import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'MoviesPage',
      component: load('MoviesPage')
    },
    {
      path: '/tv',
      name: 'Tvs',
      component: load('TvsPage')
    },
    {
      path: '/search',
      name: 'Search',
      component: load('SearchPage')
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

export default router
