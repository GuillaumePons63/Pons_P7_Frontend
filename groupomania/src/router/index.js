import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Post from "../components/post.vue";
import NewPost from "../components/newPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/post",
        name: "Post",
        component: Post,
      },
      {
        path: "/newPost",
        name: "newPost",
        component: NewPost,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
