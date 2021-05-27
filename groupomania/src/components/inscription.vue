<template>
  <div class="container">
    <label for="mail" class="col-12 col-form-label"> E-mail </label>
    <div class="col-10 mx-auto">
      <input type="email" id="mail" class="form-control m-0" v-model="email" />
    </div>

    <label for="password" class="col-12 col-form-label"> Mot de passe </label>

    <div class="col-10 mx-auto">
      <input
        type="password"
        id="password"
        class="form-control m-0"
        v-model="password"
      />
    </div>

    <label for="firstName" class="col-12 col-form-label"> Prénom </label>
    <div class="col-10 mx-auto">
      <input
        type="text"
        id="firstName"
        class="form-control m-0"
        v-model="firstName"
      />
    </div>
    <label for="lastName" class="col-12 col-form-label"> Nom </label>
    <div class="col-10 mx-auto">
      <input
        type="text"
        id="lastName"
        class="form-control m-0"
        v-model="lastName"
      />
    </div>
    <label for="job" class="col-12 col-form-label"> Métier </label>
    <div class="col-10 mx-auto">
      <input type="text" id="job" class="form-control m-0" v-model="job" />
    </div>
    <button @click="post" class="btn btn-secondary mt-3">S'inscrire</button>
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
