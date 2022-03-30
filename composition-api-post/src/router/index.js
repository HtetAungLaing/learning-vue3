import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostById from "../views/PostById.vue";
import Create from "../views/Create.vue";
import PostByTag from "../views/PostByTag.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/post/:id",
    name: 'postById',
    component: PostById,
    props: true,
  },
  {
    path: "/post/create",
    name: "create",
    component: Create
  },
  {
    path: "/tag/:tag",
    name: "postByTag",
    component: PostByTag,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
