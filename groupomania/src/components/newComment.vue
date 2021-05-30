<template>
  <div>
    <input type="text" v-model="comment" />
    <button @click="newComment(postid)">Commenter</button>
  </div>
</template>

<script>
import { http } from "../axios";
import Swal from "sweetalert2";

export default {
  name: "newComment",
  data: () => {
    return {
      comment: null,
    };
  },
  props: ["urlNewComment", "postid"],
  methods: {
    newComment() {
      const newComment = {
        comment: this.comment,
      };
      http
        .post(this.urlNewComment, newComment, {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token"),
          },
        })
        .then(() =>
          Swal.fire(
            "Ajouté!",
            "Votre commentaire a été ajouté",
            "success"
          ).then(() => document.location.reload())
        )
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style></style>
