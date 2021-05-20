<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      {{ post.User.firstName }} {{ post.User.lastName }} a écrit
      {{ post.title }}
      <br />
      {{ post.post }} <br />
      <Comment v-bind:id="post.id" />
      <router-link :to="{ name: 'newComment', params: { id: post.id } }">
        Poster un commentaire
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { authHttp } from "../axios";
import Comment from "../components/comment";

export default {
  name: "post",
  data() {
    return {
      posts: [],
    };
  },
  components: { Comment },
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
