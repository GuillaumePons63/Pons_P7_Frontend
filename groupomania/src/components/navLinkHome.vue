<template>
  <div>
    <router-link to="/connection"> Connection</router-link> |
    <router-link to="/inscription"> Inscription </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "navLinkHome",
};
</script>
