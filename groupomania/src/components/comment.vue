<template>
  <div>
    <div>
      {{ firstName }} {{ lastName }} a commenté <br />
      {{ comment }}
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  props: ["firstName", "lastName", "comment"],
};
</script>

<style></style>
