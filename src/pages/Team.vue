<template>
  <NavigationLayout :back="true" :menu="true">
    <div class='container'>
      <h1>Team</h1>
      <img src="@/assets/uic-school-front.jpg" alt="">
      <div class="text">
        <p>801 S Paulina St, Chicago, IL 60612</p>
        <p>(312) 996-7555</p>
        <p>Directions</p>
        <p>Website</p>
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  name: 'Account',

  components: {
    NavigationLayout
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
}
p {
  padding: 10px 0;
}
.text {
  font-family: 'Zilla Slab';
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  line-height: 30px;
}
</style>
