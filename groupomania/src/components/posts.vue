<template>
  <div class="container">
    <div class="row">
      <OnePost
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :firstName="post.user.firstName"
        :lastName="post.user.lastName"
        :title="post.title"
        :post="post.post"
        :userId="post.userId"
        :date="post.createdAt"
        v-bind:src="post.imageUrl"
        v-bind:altText="post.altText"
      />
    </div>
  </div>
</template>

<script>
import { http } from "../axios";

import OnePost from "../components/onePost";

export default {
  name: "posts",
  data() {
    return {
      posts: [],
    };
  },
  components: { OnePost },
  created() {
    http
      .get("post", {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      })
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
