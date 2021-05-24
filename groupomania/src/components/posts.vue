<template>
  <div>
    <OnePost
      v-for="post in posts"
      :key="post.id"
      :firstName="post.firstName"
      :lastName="post.lastName"
      :title="post.title"
      :post="post.post"
    />
    <Comment v-bind:id="post.id" />
  </div>
</template>

<script>
import { authHttp } from "../axios";
import Comment from "../components/comment";
import OnePost from "../components/onePost";

export default {
  name: "posts",
  data() {
    return {
      posts: [],
    };
  },
  components: { Comment, OnePost },
  created() {
    authHttp
      .get("post")
      .then((response) => (this.posts = response.data))
      .catch((error) => ({ error }));
  },
};
</script>

<style scoped>
input {
  margin: 10px;
}

ul {
  padding: 20px;
}

li {
  padding: 20px;
}
</style>
