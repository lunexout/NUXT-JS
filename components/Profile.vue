<template>
  <div
    style="position: absolute; right: 5px; display: flex; top: 0; align-items: center; justify-content: center"
  >
    <img
      @click="openProfile"
      style="display: flex; cursor: pointer; align-items: center; justify-content: center; border: 1px solid #32363E; background-color: #32363E; border-radius: 25px; margin-top: -7px;"
      src="https://www.peoplecorp.com.au/wp-content/uploads/2015/04/steve-jobs-portrait1-400x400.jpg"
      width="50"
      height="50"
    />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
export default Vue.extend({
  methods: {
    openProfile(): void {
      this.$nuxt.$emit("openProfilePanel");
    }
  }
});
</script>

<style></style>
