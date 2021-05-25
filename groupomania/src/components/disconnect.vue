<template>
  <div></div>
</template>

<script>
export default {
  name: "disconnect",
  created() {
    localStorage.clear();
    this.$router.push({ name: "Home" });
  },
};
</script>

<style></style>
