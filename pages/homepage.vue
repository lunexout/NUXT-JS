<template>
  <Home :info='post' />
</template>

<script>
export default {
  layout: "navbar",
  async asyncData({ params, $http }) {
    const post = await $http.$get('https://api.nuxtjs.dev/posts');
    return { post };
  }
};
</script>

<style></style>
