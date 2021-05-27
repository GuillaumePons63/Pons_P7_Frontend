<template>
  <div>
    <label for="title"> Titre </label>
    <input type="text" id="title" v-model.lazy="titleModify" />
    <label for="post"> Ecrire un post </label>
    <input type="text" id="post" v-model="postModify" />
    <input type="text" name="alt-picture" v-model="altText" />
    <label for="picture"> Envoie d'image </label>
    <input type="file" name="picture" id="picture" @change="onselect" />
    <button @click="modifyPost(Id)">Envoyer</button>
  </div>
</template>

<script>
import { authHttp } from "../axios";
export default {
  name: "modifyPost",
  data: () => {
    return {
      postModify: "",
      titleModify: "",
      altTextModify: null,
      file: null,
    };
  },
  props: ["Id", "title"],
  methods: {
    onselect(event) {
      this.file = event.target.files[0];
    },
    modifyPost(Id) {
      const formData = new FormData();
      formData.append("file", this.file);
      let url = "post/" + Id;
      const modifyPost = {
        title: this.titleModify,
        post: this.postModify,
      };
      formData.append("body", JSON.stringify(modifyPost));
      console.log(formData);
      authHttp
        .put(url, formData)
        .then(() => this.$router.push({ name: "Main" }))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
