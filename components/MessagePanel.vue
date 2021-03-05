<template>
  <div
    style="background-color: black; z-index: 5;
     position: fixed; background: rgb(50, 54, 62);
     margin-left: -11px; 
     border-radius: 15px; position: relative"
    class="before-animation"
  >
    <!-- <div class="notification-content"> -->
    <MessageCard
      :notification="{
        title: 'Message',
        description: 'New comment from username',
        date: '12/12/2021',
        time: '13:00'
      }"
    />
    <MessageCard
      :notification="{
        title: 'Message',
        description: 'New comment from username',
        date: '12/12/2021',
        time: '13:00'
      }"
    />
    <MessageCard
      :notification="{
        title: 'Message',
        description: 'New comment from username',
        date: '12/12/2021',
        time: '13:00'
      }"
    />
    <!-- </div> -->
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
  right: 68px;
  background-color: #32363e;
  width: 25px;
  height: 25px;
  transform: rotate(45deg);
}
.notification-content {
  padding: 10px;
}
</style>
