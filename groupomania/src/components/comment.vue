<template>
  <div>
    <ul>
      <li v-for="comment in comments" v-bind:key="comment.id">
        {{ comment.User.firstName }} {{ comment.User.lastName }} a commenté
        {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script>
import { authHttp } from "../axios";

export default {
  name: "comment",
  data() {
    return {
      comments: [],
    };
  },
  props: ["id"],
  created() {
    let url = "post/" + this.id + "/comment";
    authHttp
      .get(url)
      .then((response) => (this.comments = response.data))
      .catch((error) => ({ error }));
  },
};
</script>

<style></style>
