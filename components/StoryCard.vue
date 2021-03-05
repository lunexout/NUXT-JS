<template>
  <div class="carousel_div">
    <img
      width="80"
      height="80"
      style="border-radius: 50%;"
      
    />

    <ul>
      <li>{{ info }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      mountains: []
    }
  },
  props: ['info'],
    // async fetch() {
    //   this.mountains = await fetch(
    //     'https://api.nuxtjs.dev/mountains'
    //   ).then(res => res.json())
    // },
    // fetchOnServer: true
});
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
