<template>
  <div>
    <h2>{{ firstName }} {{ lastName }} à publié {{ title }}</h2>
    <img :src="src" class="img" /> <br />
    <h3>{{ post }}</h3>

    <button @click="getComment(id)">
      Voir les commentaires
    </button>
    <div v-show="noComment === 'visible'">Il n'y a aucun commentaire</div>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :firstName="comment.user.firstName"
      :lastName="comment.user.lastName"
      :comment="comment.comment"
    />
    <button @click="propsPostId(id)">Ecrire un commentaire</button>
    <NewComment
      v-show="newCommentVisible === 'visible'"
      :urlNewComment="urlNewComment"
    />
  </div>
</template>

<script>
import Comment from "../components/comment";
import { authHttp } from "../axios";
import NewComment from "../components/newComment";

export default {
  name: "onePost",
  data() {
    return {
      comments: [],
      noComment: "",
      newCommentVisible: "",
      urlNewComment: "",
    };
  },
  props: ["firstName", "lastName", "title", "src", "post", "id"],
  components: { Comment, NewComment },
  methods: {
    getComment(id) {
      let url = "post/" + id + "/comment";
      authHttp
        .get(url)
        .then((response) => {
          this.comments = response.data;
          if (this.comments.length === 0) {
            this.noComment = "visible";
          }
        })
        .catch((error) => ({ error }));
    },
    propsPostId(id) {
      this.newCommentVisible = "visible";
      this.urlNewComment = "post/" + id + "/newComment";
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
