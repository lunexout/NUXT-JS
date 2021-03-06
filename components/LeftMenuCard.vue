<template>
  <div class="wrapper mt-2" style="margin: 0 auto;" aria-label="left menu">
    <div class="card mt-2">
      <div class="front">
        <h1 class="ml-2" dir='auto'>{{ cardinfo.title }}</h1>
        <p><span>2021</span></p>
        <p><span>Hover to see topics</span></p>
        <p class="price ml-1">Check News</p>
      </div>
      <div class="right">
        <h1 dir='auto'>{{ cardinfo.title }}</h1>
        <ul>
          <li v-for="topic in cardinfo.topics" :key="topic">
            <font-awesome-icon
              style="color: #011991; font-size: 18px;"
              class="mr-4"
              :icon="['fas', 'angle-right']"
            />
            {{ topic }}
          </li>
        </ul>
        <button type='button' aria-label="read more">
          <a :href="cardinfo.link" style="text-decoration: none; color: white"
            >{{cardinfo.title}} Topics</a
          >
        </button>
      </div>
    </div>
    <div class="img-wrapper">
      <!-- <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt=''>     -->
      <font-awesome-icon
        style="color: #61DAEE; font-size: 50px; margin-top: 90px;"
        :icon="['fas', cardinfo.icon]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface LEFTCARDINFO {
  title: String;
  link: String;
  topics: String[];
  icon: String;
}

export default Vue.extend({
  data() {
    return {};
  },
  props: {
    cardinfo: {
      type: Object as () => LEFTCARDINFO
    }
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sarala:700|Exo+2:300");

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  outline: 1px solid transparent;
}

.wrapper {
  margin-top: 50px !important;
  width: 260px;
  height: 300px;
  perspective: 800px;
  position: relative;
}

.card {
  margin-top: 50px;
  margin: 0 auto;
  width: 260px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  /* border: 1px solid ; */
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  background-color: transparent;
}

.card > div {
  position: absolute;
  width: 260px;
  height: 300px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
}

.front {
  margin: 0 auto;
  background-image: linear-gradient(
    180deg,
    rgba(145, 141, 144, 1) 0%,
    rgba(92, 91, 94, 0) 100%
  );
  transform: rotateY(0deg) translateZ(160px);
  border-radius: 34px 3px 34px 34px;
}

.right {
  background-image: linear-gradient(
    0deg,
    rgba(145, 141, 144, 1) 0%,
    rgba(92, 91, 94, 0) 100%
  );
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 34px;
}

.card:hover {
  transform: translateZ(-160px) rotateY(-90deg);
}

.card:hover .front {
  opacity: 0;
}

.card:hover .right {
  opacity: 1;
}

h1,
h2 {
  margin: 0;
  font-size: 38px;
  letter-spacing: -0.25px;
  transform: translateX(-44px);
  font-family: "Sarala";
  font-weight: 700;
}

h2 {
  font-size: 21px;
  transform: translateX(-34px);
}

p {
  margin: 0;
  font-weight: 300;
  font-size: 16px;
}

span {
  margin-left: 13px;
  opacity: 0.55;
}

img {
  transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
}

.img-wrapper {
  animation: float 4s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  backface-visibility: hidden;
}

@keyframes float {
  0% {
    transform: translateZ(20px);
  }
  100% {
    transform: translateY(-21px) translateX(-13px) translateZ(30px);
  }
}

.card:hover ~ .img-wrapper img {
  transform: scale(0.9) translateX(77%) translateY(90%) rotateZ(80deg);
}

ul {
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
}

li {
  padding-bottom: 8px;
  position: relative;
}

li:before {
  position: absolute;
  left: -21px;
  opacity: 0.55;
}

button {
  position: absolute;
  right: 21px;
  bottom: 34px;
  border: none;
  box-shadow: none;
  background: none;
  color: inherit;
  font-family: "Exo 2";
  font-weight: 300;
  font-size: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
  padding: 25px 34px;
  border-radius: 55px 55px 21px 55px;
  background-image: linear-gradient(
    130deg,
    rgb(1, 25, 145) 50%,
    rgba(51, 46, 57, 0.89) 100%
  );
  background-size: 125% 100%;
  background-position: right;
  cursor: pointer;
  box-shadow: 8px 5px 13px rgba(34, 34, 34, 0.08);
  transform: scale(0) skewY(13deg);
  transition: all 150ms cubic-bezier(0.39, 0.575, 0.565, 1);
  transform-origin: right bottom;
}

.card:hover button {
  transform: scale(1) skewY(0);
}

.card:not(:hover) button {
  opacity: 0;
}

button:hover {
  background-position: left;
}

.price {
  position: absolute;
  bottom: 34px;
  left: 21px;
  font-size: 34px;
  opacity: 0.34;
}

@keyframes fadeIn {
  0% {
    opacity: 0.33;
    transform: scale(0.89);
  }
}

@media only screen and (max-width: 600px) {
  body {
    transform: scale(0.67);
  }
}
</style>
