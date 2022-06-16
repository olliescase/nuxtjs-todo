<template>
    <div>
        <h1>About Page</h1>
        <p>
            This page is rendered on the <strong>{{ rendering }}</strong>
        </p>
        <p v-if="rendering === 'server'">
            First load or hard refresh is done on server side.
        </p>
        <p v-if="rendering === 'client'">Navigation is done on client side.</p>
        <ul>
            <li>Refresh the page for server side rendering.</li>
            <li>Click the links to see client side rendering.</li>
        </ul>
        <NuxtLink to="/"> Home page </NuxtLink>
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