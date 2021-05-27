import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Connection from "../components/connection.vue";
import Inscription from "../components/inscription.vue";
import Posts from "../components/posts.vue";
import NewPost from "../components/newPost.vue";
import Disconnect from "../components/disconnect.vue";

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
    children: [
      {
        path: "/posts",
        name: "posts",
        component: Posts,
      },
      {
        path: "/newPost",
        name: "newPost",
        component: NewPost,
      },
      {
        path: "/disconnect",
        name: "disconnect",
        component: Disconnect,
      },
    ],
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
