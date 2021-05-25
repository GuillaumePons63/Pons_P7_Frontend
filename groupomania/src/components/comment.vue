<template>
  <div>
    <div>
      {{ firstName }} {{ lastName }} a commenté <br />
      {{ comment }}
    </div>
    <div>
      <button @click="newComment(postid)">Ecrire un commentaire</button>
      <NewComment />
    </div>
  </div>
</template>

<script>
import NewComment from "../components/newComment";

export default {
  name: "comment",
  data() {
    return {
      clique: "",
      id: null,
    };
  },
  props: ["firstName", "lastName", "comment", "postid", "state"],
  component: { NewComment },
  methods: {
    newComment(postid) {
      this.clique = "clique";
      this.id = postid;
    },
  },
};
</script>

<style></style>
