<template>
  <div>
    <h2>{{ firstName }} {{ lastName }} à publié {{ title }}</h2>
    <img :src="src" class="img" /> <br />
    <h3>{{ post }}</h3>
    <button @click="getComment(id)">Voir les commentaires</button>
    <div v-show="state === 'vide'">Il n'y a aucun commentaire</div>
    <Comment
      v-for="comment in comments"
      :postid="comment.PostId"
      :key="comment.id"
      :firstName="comment.user.firstName"
      :lastName="comment.user.lastName"
      :comment="comment.comment"
      :state="state"
    />
  </div>
</template>

<script>
import Comment from "../components/comment";
import { authHttp } from "../axios";

export default {
  name: "onePost",
  data() {
    return {
      comments: [],
      state: "",
    };
  },
  props: ["firstName", "lastName", "title", "src", "post", "id"],
  components: { Comment },
  methods: {
    getComment(id) {
      let url = "post/" + id + "/comment";
      authHttp
        .get(url)
        .then((response) => {
          this.comments = response.data;
          if (this.comments.length === 0) {
            this.state = "vide";
          }
        })
        .catch((error) => ({ error }));
    },
  },
};
</script>

<style scoped>
.img {
  width: 250px;
  height: auto;
}
</style>
