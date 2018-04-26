<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './utils/fonts/fonts.css'
export default {
  name: 'App'
}
</script>

<style>
* {
  font-family: 'Zilla Slab';
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(19deg, #5EA58E 10%, #0A6D60 81%);
}

.container {
  max-width: 375px;
  padding: 0 30px;
  margin: 0 auto;
}
</style>
