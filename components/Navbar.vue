<template>
  <div
    class="fixed-top"
    style="background-color: #20232A; height: 70px; display: flex; align-items: center; justify-content: center;"
  >
    <div class="container" style="max-width: 1680px;">
      <div class="row justify-content-between">
        <div class="col-xl-3 col-md-3 col-1" style="position: relative;">
          <Notification/>
        </div>
        <div class="col-xl-5 col-md-5 col-8 p-2" style="position: relative;">
          <Search/>
        </div>
        <div class="col-xl-3 col-md-3 col-2" style="position: relative;">
          <Profile/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
});
</script>

<style scoped>
@media all and (max-width: 555px) {
  .logoname {
    display: none;
  }
}
</style>
