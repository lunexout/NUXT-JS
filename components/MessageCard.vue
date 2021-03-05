<template>
  <div
    style="padding: 10px;"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-autohide="false"
  >
    <div style="border: 1px solid #20232A; border-radius: 10px;">
      <div class="toast-header" style="background-color: #32363E; ">
      <strong class="mr-auto">
        <font-awesome-icon
          style="color: #fff; font-size: 30px;"
          :icon="['fas', 'comments']"
        /><span style="margin-left: 15px;">{{ notification.title }}</span>
      </strong>
    </div>
    <div class="toast-body" style="background-color: #32363E; margin-top: -1px;">
      <span style="font-size: 16px; font-weight: bolder;">{{ notification.description }}</span><br>
      <span style="">{{ notification.date }} {{ notification.time }}</span>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
interface NOTIFICATION {
  title: String;
  date: String;
  time: String;
}
export default Vue.extend({
  data() {
    return {};
  },
  props: {
    notification: {
      type: Object as () => NOTIFICATION
    }
  }
});
</script>

<style></style>
