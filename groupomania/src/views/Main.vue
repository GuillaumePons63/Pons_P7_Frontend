<template>
  <div>
    <router-link :to="{ name: 'Post' }"> Les derniers posts </router-link> |
    <router-link :to="{ name: 'newPost' }"> Ecrire un post </router-link> |
    <a @click="disconnect"> Se déconnecter </a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    disconnect() {
      sessionStorage.clear();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
