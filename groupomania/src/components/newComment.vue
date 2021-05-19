<template>
  <div>
    <input type="text" id="comment" v-model="comment" />
    <button @click.prevent="newComment">Commenter</button>
  </div>
</template>

<script>
import { authHttp } from "../axios";

export default {
  name: "newComment",
  data: () => {
    return {
      comment: null,
    };
  },
  methods: {
    newComment() {
      const newComment = {
        comment: this.comment,
      };
      let url = "post/" + this.$route.params.id + "/newComment";
      authHttp
        .post(url, newComment)
        .then(() => this.$router.push({ name: "Main" }))
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style></style>
