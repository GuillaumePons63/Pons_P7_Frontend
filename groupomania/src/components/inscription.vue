<template>
  <div>
    <form>
      <label for="mail"> E-mail </label>
      <input type="email" id="mail" v-model="email" /> <br />
      <label for="password"> Mot de passe </label>
      <input type="text" id="password" v-model="password" /> <br />
      <label for="firstName"> Prénom </label>
      <input type="text" id="firstName" v-model="firstName" /> <br />
      <label for="lastName"> Nom </label>
      <input type="text" id="lastName" v-model="lastName" /> <br />
      <label for="job"> Métier </label>
      <input type="text" id="job" v-model="job" /> <br />

      <button @click="post">s'inscrire</button>
    </form>
  </div>
</template>

<script>
import { HTTP } from "../axios";

export default {
  name: "inscription",
  data: () => {
    return {
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      job: null,
    };
  },
  methods: {
    post() {
      const user = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        job: this.job,
      };
      console.log(user);
      HTTP.post("auth/signup", user)
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
