<template>
  <div @click="$emit('click')" class="button">
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Gotham';
  text-transform: uppercase;
  background-color: #278ab5;
  border-radius: 50px;
  padding: 29px 22px 18px 22px;
  width: 190px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  color: #FFFFFF;
}
</style>
