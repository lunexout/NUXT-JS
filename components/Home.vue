<template>
  <div class="container text-white" style=" max-width: 1680px;">
    <div class="row justify-content-between">
      <div
        v-if="isNotificationPanel || isMessagePanel"
        class="col-xl-3 col-md-3 col-12 0_row"
      >
        <NotificationPanel v-if="isNotificationPanel" />
        <MessagePanel v-else-if="isMessagePanel" />
      </div>
      <div v-else class="col-xl-3 col-md-3 col-12 first_row">
        <div>
          <LeftMenu />
        </div>
      </div>
      <div class="col-xl-5 col-md-8 col-12 second_row">
        <StoryCarousel />
        <div style="border: 1px solid red; height: 300px;"></div>
      </div>
      <div class="col-xl-3 col-md-12 third_row">
        <div>
          <ProfilePanel v-if="isProfilePanel" />
        </div>
        <div style="height: 300px; border: 1px solid red;"></div>
        <div style="height: 300px; border: 1px solid red;" class="mt-3"></div>
        <div style="height: 300px; border: 1px solid red;" class="mt-3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isNotificationPanel: false,
      isMessagePanel: false,
      isProfilePanel: false
    };
  },
  created() {
    this.$nuxt.$on("openNotificationEmit", () => {
      this.isNotificationPanel
        ? (this.isNotificationPanel = false)
        : (this.isNotificationPanel = true);
      this.isMessagePanel = false;
    });
    this.$nuxt.$on("openMessageEmit", () => {
      this.isNotificationPanel = false;
      this.isMessagePanel
        ? (this.isMessagePanel = false)
        : (this.isMessagePanel = true);
    });
    this.$nuxt.$on("openProfilePanel", () => {
      this.isProfilePanel
        ? (this.isProfilePanel = false)
        : (this.isProfilePanel = true);
    });
  }
});
</script>

<style scoped>
@media all and (max-width: 1060px) {
  /* .first_row {
    display: none ;
  } */
}
.first_row {
  background-color: #32363e;
  border-radius: 15px;
}
.second_row {
  background-color: #32363e;
  border-radius: 25px;
}
.third_row {
  background-color: #32363e;
  border-radius: 25px;
  padding: 10px;
}
</style>
