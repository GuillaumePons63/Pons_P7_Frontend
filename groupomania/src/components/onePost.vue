<template>
  <div class="card col-lg-4 mt-3">
    <div class="card-header">
      {{ dateDisplay }} {{ firstName }} {{ lastName }} a publié {{ title }}
    </div>
    <img class="card-img-top" :src="src" alt="altText" /> <br />
    <p class="cardbody">{{ post }}</p>
    <button
      class="btn btn-danger mt-3"
      v-show="userId == localUser"
      @click="deletePost(id)"
    >
      Supprimer
    </button>

    <button
      class="btn btn-primary mt-3"
      v-show="userId == localUser"
      @click="showModifyPost(title)"
    >
      modifier
    </button>

    <ModifyPost v-show="modifyPost === 'visible'" :Id="id" :title="Title" />

    <br />
    <button class="btn btn-secondary mt-3" @click="getComment(id)">
      Voir les commentaires
    </button>
    <div v-show="noComment === 'visible'">Il n'y a aucun commentaire</div>

    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :firstName="comment.user.firstName"
      :lastName="comment.user.lastName"
      :comment="comment.comment"
      :userId="comment.userId"
      :id="comment.id"
    />
    <button class="btn btn-secondary mt-3" @click="propsPostId(id)">
      Ecrire un commentaire
    </button>

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
import ModifyPost from "../components/modifyPost";
import moment from "moment";

export default {
  name: "onePost",
  data() {
    return {
      comments: [],
      noComment: "",
      newCommentVisible: "",
      urlNewComment: "",
      localUser: localStorage.getItem("userId"),
      modifyPost: "",
      Id: "",
      Title: "",
      dateDisplay: "",
    };
  },
  props: [
    "firstName",
    "lastName",
    "title",
    "src",
    "post",
    "id",
    "userId",
    "date",
  ],
  components: { Comment, NewComment, ModifyPost },
  created() {
    moment.locale("fr");

    this.dateDisplay = moment(this.date).calendar();
  },
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
    deletePost(id) {
      let url = "post/" + id;
      authHttp.delete(url).then(() => document.location.reload());
    },
    showModifyPost() {
      this.modifyPost = "visible";
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
