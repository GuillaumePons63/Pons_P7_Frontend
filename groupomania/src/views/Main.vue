<template>
  <div class="container-fluid ">
    <div class="row bg-light">
      <img src="../assets/icon-left-font.png" class="col-12" />
    </div>
    <nav class="row bg-light">
      <div class="col-md-2"></div>
      <router-link to="/posts" class="btn btn-secondary col-md-2 mt-2">
        Toutes les publications</router-link
      >
      <div class="col-md-1"></div>
      <router-link to="/newPost" class="btn btn-secondary col-md-2 mt-2">
        Créer une publication
      </router-link>
      <div class="col-md-1"></div>
      <router-link to="/disconnect" class="btn btn-secondary col-md-2 mt-2">
        Se déconnecter
      </router-link>
      <div class="col-md-2"></div>
    </nav>
    <div>
      <router-link
        v-show="isAdmin == 'true'"
        to="/administration"
        class="btn btn-danger"
        >Administration
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },
};
</script>

<style scoped>
.max-height {
  max-height: 200px;
}
</style>
