<template class="container">
  <div class="row">
    <div class="mt-3">
      <div class="bg-secondary bg-gradient">{{ firstName }} {{ lastName }}</div>

      <div>{{ comment }}</div>
    </div>
    <div v-show="userId == localUser">
      <button @click="deleteComment(id)" class="btn btn-danger m-2">
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
import { authHttp } from "../axios";
import Swal from "sweetalert2";

export default {
  name: "comment",
  data() {
    return {
      localUser: localStorage.getItem("userId"),
    };
  },
  props: ["firstName", "lastName", "comment", "userId", "id"],
  methods: {
    deleteComment(id) {
      Swal.fire({
        title: "Êtes-vous sur de vouloir confirmer la suppression ?",
        text: "Vous ne pourrez pas revenir en arrière",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, je veux supprimer",
      }).then((result) => {
        if (result.isConfirmed) {
          let url = "/post/comment/" + id;
          authHttp.delete(url).then(() => {
            Swal.fire(
              "Supprimé!",
              "Votre commentaire a été supprimé",
              "success"
            ).then(() => location.reload());
          });
        }
      });
    },
  },
};
</script>

<style></style>
