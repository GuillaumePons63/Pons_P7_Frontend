<template>
  <div class="container">
    <form @submit.prevent="post()">
      <label for="mail" class="col-12 col-form-label"> E-mail </label>
      <div class="col-10 mx-auto">
        <input type="email" class="form-control m-0" v-model="email" required />
      </div>

      <label for="password" class="col-12 col-form-label"> Mot de passe </label>

      <div class="col-10 mx-auto">
        <input
          type="password"
          class="form-control m-0"
          v-model="password"
          required
        />
      </div>

      <label for="firstName" class="col-12 col-form-label"> Prénom </label>
      <div class="col-10 mx-auto">
        <input
          type="text"
          class="form-control m-0"
          v-model="firstName"
          required
        />
      </div>
      <label for="lastName" class="col-12 col-form-label"> Nom </label>
      <div class="col-10 mx-auto">
        <input
          type="text"
          class="form-control m-0"
          v-model="lastName"
          required
        />
      </div>
      <label for="job" class="col-12 col-form-label"> Métier </label>
      <div class="col-10 mx-auto">
        <input type="text" class="form-control m-0" v-model="job" required />
      </div>

      <div class="col-12">
        <button class="btn btn-secondary mt-3">S'inscrire</button>
      </div>
    </form>
  </div>
</template>

<script>
import { http } from "../axios";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "confirmez votre mot de passe",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "",
      }).then((password) => {
        if (this.password == password.value) {
          const user = {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            job: this.job,
          };

          http
            .post("auth/signup", user)
            .then(() =>
              Swal.fire("Vous pouvez maintenant vous connecter").then(() =>
                this.$router.push({ path: "/connection" })
              )
            )
            .catch(() =>
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Il y a eu un problème",
              })
            );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Les mots de passe ne correspondent pas",
          });
        }
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
