<template>
  <div>
                <LeftMenuCard
            :cardinfo="{
              title: 'Sport',
              link: 'http://www.google.com',
              topics: [
                'Brain concussion of athletes',
                'Athletic varicose disease'
              ],
              icon: 'biking'
            }"
          />
          <LeftMenuCard
            :cardinfo="{
              title: 'Music',
              link: 'http://www.google.com',
              topics: [
                'Music and Its Effects on the Brain',
                'The music history'
              ],
              icon: 'play'
            }"
          />
          <LeftMenuCard
            :cardinfo="{
              title: 'Art',
              link: 'http://www.google.com',
              topics: ['The most famous artist', 'Tattooing in 2021'],
              icon: 'paint-brush'
            }"
          />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style scoped>

</style>