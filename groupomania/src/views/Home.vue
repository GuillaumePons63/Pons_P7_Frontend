<template class="container">
  <div class="row">
    <div class="jumbotron bg-light">
      <h1>Bienvenue sur le réseau de Groupomania</h1>
    </div>
    <div>
      <img
        src="../assets/icon.png"
        class="rounded col-2"
        alt="icone de l'entreprise Groupomania"
      />
    </div>
    <div class="col-2"></div>
    <router-link to="/connection" class="col-3  btn btn-primary">
      Se connecter
    </router-link>
    <div class="col-2"></div>
    <router-link to="/inscription" class="col-3 btn btn-primary">
      S'inscrire
    </router-link>
    <div class="col-2"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
