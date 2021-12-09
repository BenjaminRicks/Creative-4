import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Anime from '../views/Anime.vue'
import Games from '../views/Games.vue'
import Admin from '../views/Admin.vue'
import GamesAdmin from '../views/GamesAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/school',
    name: 'School',
    component: Home
  },
  {
    path: '/misc',
    name: 'Misc',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admingames',
    name: 'gamesAdmin',
    component: GamesAdmin
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
