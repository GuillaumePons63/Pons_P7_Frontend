<template class="container">
  <div class="row">
    <img src="../assets/icon.png" class="col-2" />
    <h1 class="col-4">Administration</h1>
    <router-link class="btn btn-secondary col-3" to="/main">
      revenir à l'interface utilisateur
    </router-link>
    <router-link to="/users" class="btn col-3 btn-secondary">
      Tous les utilisateurs
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Administration",
  data() {},
};
</script>

<style></style>
