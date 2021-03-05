<template>
  <div
    style="background-color: black; z-index: 5; position: fixed; background: rgb(50, 54, 62); margin-left: -11px; border-radius: 15px; position: relative"
    class="before-animation"
  >
    <NotificationCard
      :notification="{
        title: 'Notification',
        description: 'New notification from username',
        date: '12/12/2021',
        time: '13:00'
      }"
    />
    <NotificationCard
      :notification="{
        title: 'Notification',
        description: 'New notification from username',
        date: '18/12/2021',
        time: '12:00'
      }"
    />
    <NotificationCard
      :notification="{
        title: 'Notification',
        description: 'New notification from username',
        date: '15/12/2021',
        time: '13:00'
      }"
    />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.before-animation::before {
  content: "";
  position: absolute;
  top: -9px;
  right:10px;
  background-color: #32363E;
  width: 25px;
  height: 25px;
  transform: rotate(45deg);
}
.notification-content {
  padding: 10px;
}
</style>
