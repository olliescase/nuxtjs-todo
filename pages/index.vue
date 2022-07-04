<template>
  <div>
    <List></List>
  </div>
</template>

<script>
import Test from '~/components/List.vue';
export default {
  async fetch() {
    console.log(this.$nuxt.$route);
    this.rendering = process.server ? "server" : "client";
  },
  components: { Test }
}
</script>
