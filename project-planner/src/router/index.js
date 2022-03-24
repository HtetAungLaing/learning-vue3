import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProject from '../views/CreateProject.vue';
import EditProject from "../views/EditProject.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createProject',
    name: 'createProject',
    component: CreateProject,
  },
  {
    path: '/editProject/:id',
    name: 'editProject',
    component: EditProject,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
