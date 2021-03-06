<template>
  <div
    style="right: 10px; margin-top: -10px; background-color: rgb(50, 54, 62); z-index: 5;
     padding: 5px; border-radius: 8px; width: 150px; display: flex;
     align-items: right; justify-content: flex-end; flex-direction: column;"
  >
    <div
      style="display: flex; align-items: center; justify-content: flex-end; cursor: pointer;"
      class="hover-animation-div"
    >
      <span style="font-size: 21px; margin-right: 15px; margin-left: 15px;"
        >Profile</span
      >
      <!-- <font-awesome-icon
        style="color: #fff; font-size: 30px;"
        :icon="['fas', 'sign-out-alt']"
      /> -->
      <font-awesome-icon
        style="color: #fff; font-size: 20px; margin-right: 15px;"
        :icon="['fas', 'user']"
      />
    </div>
    <div
      style="display: flex; align-items: center; justify-content: flex-end; cursor: pointer; margin-top: 5px"
      class="hover-animation-div"
    >
      <span style="font-size: 21px; margin-right: 15px; margin-left: 15px;"
      @click='logout'
        >Logout</span
      >
      <font-awesome-icon
        style="color: #fff; font-size: 20px; margin-right: 15px;"
        :icon="['fas', 'sign-out-alt']"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path: '/'})
    }
  }
});
</script>

<style scoped></style>
