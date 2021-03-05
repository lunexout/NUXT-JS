<template>
  <div class="carousel_div">
    <img
      width="80"
      height="80"
      style="border-radius: 50%;"
      src="https://source.unsplash.com/random/80x80"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.carousel_div {
  border-radius: 50%;
  padding: 3px;
  background-color: #5de6de;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  cursor: pointer;
}
</style>
