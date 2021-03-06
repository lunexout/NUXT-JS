<template>
  <Home :info='post' />
</template>

<script>
import Vue from 'vue'
import firebase from "./../plugins/firebase";
export default Vue.extend ({
  data(){
    return {
      post: {}
    }
  },
  layout: "navbar",
  // async asyncData({ params, $http }) {
  //     await firebase
  //         .firestore()
  //         .collection("Users")
  //         .onSnapshot(data => {
  //           data.docs.map(item => this.post = item.data());
  //         });
  // },
})
</script>

<style></style>
