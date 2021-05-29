<template>
  <div class="container">
    <div class="row">
      <h5 class="col-1">
        id
      </h5>
      <h5 class="col-3">
        firstName
      </h5>
      <h5 class="col-3">
        lastName
      </h5>
      <h5 class="col-2">
        job
      </h5>
      <h5 class="col-2">
        admin
      </h5>
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
