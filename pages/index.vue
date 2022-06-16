<template>
  <div>
    <h1>TODO</h1>
    <p>This page is rendered on the <strong>{{ rendering }}</strong></p>
    <p v-if="rendering === 'server'">
      First load or hard refresh done on server side
    </p>
    <p v-if="rendering === 'client'">
      Navigation is done on the client side
    </p>
    <ul>
      <li>Refersh page for server-side loading</li>
      <li>Click links to see client-side rendering</li>
    </ul>

    <NuxtLink to="/about">About Page</NuxtLink>
  </div>
</template>

<script>
export default {
  async fetch() {
    console.log(this.$nuxt.$route);

    this.rendering = process.server ? "server" : "client";
  },
}
</script>