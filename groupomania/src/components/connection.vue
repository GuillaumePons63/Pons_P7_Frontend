<template>
  <div>
    <form>
      <label for="mail"> E-mail </label>
      <input type="email" id="mail" v-model="email" /> <br />
      <label for="password"> Mot de passe </label>
      <input type="text" id="password" v-model="password" /> <br />
      <button @click.prevent="post">Se connecter</button>
    </form>
  </div>
</template>

<script>
import { HTTP } from "../axios";

export default {
  name: "connection",
  data: () => {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    post() {
      sessionStorage.clear();
      const user = {
        email: this.email,
        password: this.password,
      };
      HTTP.post("auth/login", user)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
        })
        .then(() => this.$router.push({ path: "Main" }))
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
