<template>
  <div>
    <button
      class="btn btn-primary"
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
import Posts from "../components/posts";
import newPost from "../components/newPost";
import Disconnect from "../components/disconnect";

export default {
  name: "Main",
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "newPost", "Disconnect"],
    };
  },
  components: { Posts, newPost, Disconnect },
  methods: {
    disconnect() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
