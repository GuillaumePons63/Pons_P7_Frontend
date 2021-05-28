<template>
  <div class="container">
    <label for="mail" class="col-12 col-form-label"> E-mail </label>
    <div class="col-10 mx-auto">
      <input type="email" id="mail" class="form-control m-0 " v-model="email" />
    </div>
    <label for="password" class="col-12 col-form-label">
      Mot de passe
    </label>
    <div class="col-10 d-block mx-auto">
      <input
        type="password"
        id="password"
        class="form-control m-0"
        v-model="password"
      />
    </div>
    <button class="btn btn-secondary mt-3" @click.prevent="post">
      Se connecter
    </button>
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
          localStorage.setItem("isAdmin", response.data.isAdmin);
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
