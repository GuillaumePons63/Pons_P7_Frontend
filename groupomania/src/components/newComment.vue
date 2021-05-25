<template>
  <div>
    <input type="text" id="comment" v-model="comment" />
    <button @click="newComment(postid)">Commenter</button>
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
  props: ["urlNewComment", "postid"],
  methods: {
    newComment(postid) {
      const newComment = {
        comment: this.comment,
      };
      authHttp
        .post(this.urlNewComment, newComment)
        .then(() => this.$emit("update", { id: postid }))
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style></style>
