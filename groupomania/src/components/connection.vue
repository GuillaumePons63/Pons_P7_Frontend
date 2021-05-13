<template>
  <div>
    <form>
      <label for="mail"> E-mail </label>
      <input type="email" id="mail" v-model="email" /> <br />
      <label for="password"> Mot de passe </label>
      <input type="text" id="password" v-model="password" /> <br />
      <button @click="post">Se connecter</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

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
      const user = {
        email: this.email,
        password: this.password,
      };
      console.log(user);
      axios
        .post("auth/login", user)
        .then((response) => console.log(response.data.id))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
