<template>
  <div class="container">
    <label for="title" class="col-12 col-form-label">
      Titre de la publication
    </label>
    <div class="col-10 d-block mx-auto">
      <input type="text" class="form-control m-0" v-model="titleModify" />
    </div>
    <label for="post" class="col-12 col-form-label">
      Corps de la publication
    </label>
    <div class="col-10 d-block mx-auto">
      <input type="text" class="form-control m-0" v-model="postModify" />
    </div>
    <label for="alt-picture" class="col-12 col-form-label">
      Description de l'image
    </label>
    <div class="col-10 d-block mx-auto">
      <input
        type="text"
        class="form-control m-0"
        name="alt-picture"
        v-model="altTextModify"
      />
    </div>

    <input
      type="file"
      name="picture"
      @change="onselect"
      class="btn btn-primary"
    />
    <button class="btn btn-secondary" @click.prevent="newPost()">
      Envoyer
    </button>
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
