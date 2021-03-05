<template>
  <div v-if='loading' class="bg-water">
    <div class="water"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      loading: false
    };
  },
  methods: {
    start(): void {
      this.loading = true;
    },
    finish(): void {
      this.loading = false;
    }
  },
  
});
</script>

<style scoped>
.bg-water {
  background-color: #282C34;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.water {
   z-index: 3;
  position: absolute;
  margin: 0 auto;
  margin-top: 100px;
  width: 250px;
  height: 250px;
  background-color: #61DAEE;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.5),
    0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.water:before,
.water:after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  top: -150px;
  background-color: #fff;
}
.water:before {
  border-radius: 45%;
  background: rgba(255, 255, 255, 0.7);
  animation: wave 5s linear infinite;
}
.water:after {
  border-radius: 35%;
  background: rgba(255, 255, 255, 0.3);
  animation: wave 5s linear infinite;
}
@keyframes wave {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
