<template>
  <a class="navbar-brand text-white" href="#">
    <font-awesome-icon
      style="color: #61DAEE; font-size: 30px;"
      :icon="['fas', 'check-double']"
    />
    <span class="logoname">SocialMedia{{title}}</span>
    <div
      style="position: absolute; right: 5px; top: -5px; display: flex; align-items: center; justify-content: center;"
    >
      <div
        class="menu_icons_messages"
        style="transition-duration: 0.1s"
        @click="openMessage"
      >
        <font-awesome-icon
          style="color: #fff; font-size: 30px;"
          :icon="['fas', 'comments']"
        />
      </div>
      <div
        class="menu_icons_notification"
        style="transition-duration: 0.1s"
        @click="openNotification"
      >
        <font-awesome-icon
          style="color: #fff; font-size: 30px;"
          :icon="['fas', 'bell']"
        />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      title: ''
    }
  },
  methods: {
    openNotification(): void {
      this.$nuxt.$emit("openNotificationEmit");
    },
    openMessage(): void {
      this.$nuxt.$emit("openMessageEmit");
    }
  }
});
</script>

<style scoped>
.menu_icons_notification:hover {
  background-color: #282b31;
}
.menu_icons_messages:hover {
  background-color: #282b31;
}
.menu_icons_notification {
  padding: 5px;
  background-color: #32363e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353940;
  margin-left: 15px;
}
.menu_icons_messages {
  padding: 5px;
  background-color: #32363e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
