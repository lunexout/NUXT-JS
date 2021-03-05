<template>
  <div
    style="position: absolute; right: 5px; display: flex; top: 0; align-items: center; justify-content: center"
  >
    <div
      style="display: flex; align-items: center; justify-content: center; border: 1px solid #32363E; background-color: #32363E; border-radius: 25px; padding: 5px; margin-right: 15px;"
    >
      <input
        type="text"
        class="search-input"
        id="search"
        name="search"
        autocomplete="off"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        placeholder="Search your friends"
        aria-label="Search your friends"
        aria-autocomplete="false"
        aria-checked="false"
        aria-disabled="false"
        aria-errormessage="false"
        aria-placeholder="Search  your friends"
        aria-required="true"
        required
        v-model="searchFriend"
      />
      <font-awesome-icon :icon="['fas', 'search']" class="search__icon" />
    </div>
    <button
      class="btn btn-danger"
      style="border-radius: 25px; width: 150px; height: auto;"
    >
      Take Friend
    </button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend ({
  data(){
    return {
      searchFriend: ''
    }
  }
});
</script>

<style scoped>
.search-input {
  width: 63px;
  border: none;
  outline: none;
  padding-left: 10px;
  background-color: transparent;
  color: #fff;
  transition-duration: 1.3s;
}
.search-input::placeholder {
  color: lightgray;
}
.search__icon {
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  padding-right: 5px;
  padding-bottom: 1px;
}
.search-input:focus {
  width: 380px !important;
  padding-left: 15px;
}</style>
