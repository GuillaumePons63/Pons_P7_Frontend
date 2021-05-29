<template class="container">
  <div class="row mt-3">
    <span class="col-1">
      {{ id }}
    </span>
    <span class="col-3">
      {{ firstName }}
    </span>
    <span class="col-3">
      {{ lastName }}
    </span>
    <span class="col-2">
      {{ job }}
    </span>
    <span class="col-2"> admin = {{ isAdmin }} </span>
    <button @click="deleteUser(id)" class="btn btn-danger col-1">
      X
    </button>
  </div>
</template>

<script>
import { authHttp } from "../axios";
import Swal from "sweetalert2";

export default {
  name: "onePost",
  data() {
    return {};
  },
  props: ["id", "firstName", "lastName", "job", "isAdmin"],
  methods: {
    deleteUser(id) {
      // Affiche de la boite de confirmation de suppression
      Swal.fire({
        title: "Êtes-vous sur de vouloir confirmer la suppression ?",
        text: "Vous ne pourrez pas revenir en arrière",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, je veux supprimer",
      }).then((result) => {
      //Traitement du résultat
        if (result.isConfirmed) {
          let url = "admin/user/" + id;
          authHttp
            .delete(url)
            .then(() => {
              Swal.fire(
                "Supprimé!",
                "l'Utilisateur a été supprimé",
                "success"
              ).then(() => document.location.reload());
            })
            .catch((error) => ({ error }));
        }
      });
    },
  },
};
</script>

<style></style>
