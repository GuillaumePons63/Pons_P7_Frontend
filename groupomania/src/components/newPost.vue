<template>
  <div>
    <form>
      <label for="title"> Titre </label>
      <input type="text" id="title" v-model="title" />
      <label for="post"> Ecrire un post </label>
      <input type="text" id="post" v-model="post" /> <br />
      <input type="text" name="alt-picture" v-model="altText" />
      <label for="picture"> Envoie d'image </label>
      <input type="file" name="picture" id="picture" @change="onselect" />
      <button @click.prevent="newPost()">Envoyer</button>
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
      altText: null,
      file: null,
    };
  },
  methods: {
    onselect(event) {
      this.file = event.target.files[0];
    },
    newPost() {
      const formData = new FormData();
      formData.append("file", this.file);
      const newPost = {
        title: this.title,
        post: this.post,
      };
      formData.append("body", JSON.stringify(newPost));
      authHttp
        .post("post/newPost", formData)
        //.then(() => this.$router.push({ name: "Main" }))
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
