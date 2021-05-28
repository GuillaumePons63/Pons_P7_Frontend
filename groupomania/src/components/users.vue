<template>
  <div>
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
