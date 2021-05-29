<template>
  <div class="container">
    <form @submit.prevent="newPost()">
      <label for="title" class="col-12 col-form-label">
        Titre de la publication
      </label>
      <div class="col-10 d-block mx-auto">
        <input type="text" class="form-control m-0" v-model="title" required />
      </div>
      <label for="post" class="col-12 col-form-label">
        Corps de la publication
      </label>
      <div class="col-10 d-block mx-auto">
        <input type="text" class="form-control m-0" v-model="post" required />
      </div>
      <label for="alt-picture" class="col-12 col-form-label">
        Description de l'image
      </label>
      <div class="col-10 d-block mx-auto">
        <input
          type="text"
          class="form-control m-0"
          name="alt-picture"
          v-model="altText"
          required
        />
      </div>

      <input
        type="file"
        name="picture"
        @change="onselect"
        class="btn btn-primary"
        required
      />
      <button class="btn btn-secondary">
        Envoyer
      </button>
    </form>
  </div>
</template>

<script>
import { authHttp } from "../axios";
import Swal from "sweetalert2";

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
        altText: this.altText,
      };
      formData.append("body", JSON.stringify(newPost));
      authHttp
        .post("post/newPost", formData)
        .then(() => {
          Swal.fire("Publication créée avec succés").then(() =>
            this.$router.push({ path: "/posts" })
          );
        })
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
