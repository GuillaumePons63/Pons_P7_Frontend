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

    <button class="btn btn-secondary" @click.prevent="modifyPost(Id)">
      Envoyer
    </button>
  </div>
</template>

<script>
import { http } from "../axios";
import Swal from "sweetalert2";

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
    modifyPost(Id) {
      let url = "post/" + Id;
      const modifyPost = {
        title: this.titleModify,
        post: this.postModify,
      };

      http
        .put(url, modifyPost, {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          Swal.fire("Publication modifiée avec succés").then(() =>
            this.$router.push({ path: "/main" })
          );
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
