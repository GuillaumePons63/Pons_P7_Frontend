<template>
  <div class="home">
    <button
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
// @ is an alias to /src
import Connection from "@/components/connection.vue";
import Inscription from "@/components/inscription.vue";

export default {
  name: "Home",
  data() {
    return {
      currentTab: "Connection",
      tabs: ["Connection", "Inscription"],
    };
  },
  components: { Connection, Inscription },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
  },
};
</script>
