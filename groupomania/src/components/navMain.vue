<template>
  <div>
    <router-link :to="{ name: 'Post' }"> Les derniers posts </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "navMain",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
