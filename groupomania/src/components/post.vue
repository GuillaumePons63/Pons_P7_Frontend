<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
import { authHttp } from "../axios";

export default {
  name: "post",
  data: () => {
    return {
      info: null,
    };
  },
  mounted() {
    authHttp
      .get("post")
      .then((response) => (this.info = response))
      .catch((error) => ({ error }));
  },
};
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
