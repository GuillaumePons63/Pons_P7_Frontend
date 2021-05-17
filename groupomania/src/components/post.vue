<template>
  <div>
    <ul>
      <li v-for="post in posts" v-bind:key="post">
        {{ post.User.firstName }} {{ post.User.lastName }} a écrit
        {{ post.title }}
        <br />
        {{ post.post }} <br />
      </li>
    </ul>
  </div>
</template>

<script>
import { authHttp } from "../axios";

export default {
  name: "post",
  data() {
    return {
      posts: [],
    };
  },
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
