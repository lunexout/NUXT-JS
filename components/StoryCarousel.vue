<template>
  <no-ssr>
    <carousel
      style="padding: 10px;"
      :responsive="{
        100: { items: 2, nav: false,dots:false, margin: 25 },
        360: { items: 3, nav: false,dots:false, margin: 25 },
        400: { items: 3, nav: false,dots:false, margin: 25 },
        600: { items: 5, nav: false,dots:false, margin: 25 },
        750: { items: 4, nav: false,dots:false, margin: 25 },
        1000: { items: 6, nav: false,dots:false, margin: 25 },
        1199: { items: 4, nav: false,dots:false, margin: 25 },
        1400: { items: 5, nav: false,dots:false, margin: 25 },
        1600: { items: 6, nav: false,dots:false, margin: 25 }
      }"
    >
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
      <StoryCard :info='info' />
    </carousel>
  </no-ssr>
</template>

<script lang='ts'>
import Vue from 'vue'
import StoryCard from "./StoryCard.vue";  
// const StoryCard = () => require('./StoryCard')
export default Vue.extend ({
    components: {StoryCard},
    props: ['info']
});
</script>

<style></style>
