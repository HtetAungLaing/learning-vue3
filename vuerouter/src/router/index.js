import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Contact from "../views/Contact.vue";
import Jobs from "../views/Jobs.vue";
import JobDetail from "../views/JobDetail.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/job-detail/:id",
    name: "jobDetail",
    component: JobDetail,
    props: true,
  },
  {
    path: "/redirect",
    name: "redirect",
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
