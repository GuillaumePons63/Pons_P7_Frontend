<template class="container">
  <div class="row">
    <div>
      {{ firstName }} {{ lastName }} a commenté <br />
      {{ comment }}
    </div>
    <div v-show="userId == localUser">
      <button>modifier</button>
      <button>Supprimer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      localUser: localStorage.getItem("userId"),
    };
  },
  props: ["firstName", "lastName", "comment", "userId"],
};
</script>

<style></style>
