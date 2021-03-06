<template>
  <div class="carousel_div">
    <img
      width="80"
      height="80"
      style="border-radius: 50%;"
      alt="stories"
      title="Stories"
      aria-label="Stories"
      :src='post'
    />
  </div>
</template>

<script lang="js">
import Vue from "vue";
import firebase from "./../plugins/firebase";
export default Vue.extend({
  data(){
    return {
      post: {},
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
  async created(){
        await firebase
          .firestore()
          .collection("Users")
          .onSnapshot(data => {
            data.docs.map(item => this.post = item.data().image);
          });
  }
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
