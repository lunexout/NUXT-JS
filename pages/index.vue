<template>
  <Login />
  <!-- <div></div> -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      
    };
  },
  beforeMount(): void {
    if (localStorage.getItem("loged") != "true") {
      console.log('sdfsd');
    } else {
      this.$router.push({ path: "homepage" });
    }
  },

});
</script>

<style>
/* 
 */
.home {
  padding: 10px;
  border: 3px solid green;
  text-align: center;
}
</style>
