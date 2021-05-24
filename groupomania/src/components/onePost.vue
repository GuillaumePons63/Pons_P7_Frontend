<template>
  <div>
    {{ firstName }} {{ lastName }} à publié {{ title }}<br />
    {{ image }}
    {{ post }}
  </div>
</template>

<script>
export default {
  name: "onePost",
  props: ["firstName", "lastName", "title", "image", "post"],
};
</script>

<style></style>
