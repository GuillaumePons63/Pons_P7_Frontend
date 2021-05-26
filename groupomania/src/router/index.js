import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Posts from "../components/posts.vue";
import NewPost from "../components/newPost.vue";
import Comment from "../components/comment.vue";
import newComment from "../components/newComment.vue";

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
    meta: { requiresAuth: true },
    children: [
      {
        path: "/post",
        name: "Post",
        component: Posts,
        children: [
          {
            path: "/:id/comment",
            name: "comment",
            component: Comment,
          },
          {
            path: "/:id/newComment",
            name: "newComment",
            component: newComment,
          },
        ],
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
