<template>
  <div>
    <form>
      <label for="title"> Titre </label>
      <input type="text" id="title" v-model="title" />
      <label for="post"> Ecrire un post </label>
      <input type="text" id="post" v-model="post" /> <br />
      <button @click.prevent="newPost">Envoyer</button>
    </form>
  </div>
</template>

<script>
import { authHttp } from "../axios";

export default {
  name: "newPost",
  data: () => {
    return {
      post: null,
      title: null,
    };
  },
  methods: {
    newPost() {
      const newPost = {
        title: this.title,
        post: this.post,
      };
      authHttp
        .post("post/newPost", newPost)
        .then(() => this.$router.push({ path: "Main" }))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
