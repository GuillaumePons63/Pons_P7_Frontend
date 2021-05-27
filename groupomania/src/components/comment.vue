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
      let url = "/post/comment/" + id;
      authHttp.delete(url).then(() => document.location.reload());
    },
  },
};
</script>

<style></style>
