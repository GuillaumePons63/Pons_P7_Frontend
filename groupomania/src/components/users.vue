<template>
  <div class="container">
    <div class="row">
      <h3 class="col-1">
        id
      </h3>
      <h3 class="col-2">
        firstName
      </h3>
      <h3 class="col-2">
        lastName
      </h3>
      <h3 class="col-2">
        job
      </h3>
      <h3 class="col-2">
        admin
      </h3>
    </div>
    <OneUser
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :firstName="user.firstName"
      :lastName="user.lastName"
      :job="user.job"
      :isAdmin="user.isAdmin"
    />
  </div>
</template>

<script>
import { authHttp } from "../axios";
import OneUser from "../components/oneUser";

export default {
  name: "users",
  data() {
    return {
      users: [],
    };
  },
  components: { OneUser },
  created() {
    authHttp
      .get("admin/alluser")
      .then((response) => (this.users = response.data))
      .catch((error) => ({ error }));
  },
};
</script>

<style></style>
