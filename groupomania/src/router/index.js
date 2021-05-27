import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Connection from "../components/connection.vue";
import Inscription from "../components/inscription.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/connection",
        name: "connection",
        component: Connection,
      },
      {
        path: "/inscription",
        name: "inscription",
        component: Inscription,
      },
    ],
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!localStorage.getItem("token")) {
      next({
        name: "Home",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
