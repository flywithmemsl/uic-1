<template>
  <div class="container">
    <div>
      <div class="cards">
        <img src="@/assets/logo.svg">
      </div>

      <div class="content">
        <h1>Welcome</h1>
        <p>University of Illinois School of Dentistry presents a game for you to learn better oral hygiene.</p>
        <div class="button-wrapper">
          <ComponentButton @click="navigateToSelectCharacter">Get Started</ComponentButton>
        </div>
      </div>

      <router-link to="/login" class="login">Log In</router-link>
    </div>
  </div>
</template>


<script>
import ComponentButton from '@/components/Button'
export default {
  components: {
    ComponentButton
  },
  methods: {
    navigateToSelectCharacter () {
      this.$router.push('/select-character')
    }
  }
}
</script>

<style lang="scss" scoped>

.cards {
  padding-top: 35px;
  width: 100%;
  img {
    width: 200px;
    height: auto;
    margin: 0 auto;
    display: inherit;
  }
}

h1 {
  font-size: 30px;
  text-align: center;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  margin: 1rem 0;
}

p {
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.2px;
  line-height: 28px;
  max-width: 300px;
  margin: 0 auto;
}

.login {
  font-family: 'Gotham';
  text-decoration: underline;
  font-size: 18px;
  color: rgba(255,255,255,0.7);
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  display: block;
}

.content {
  margin-top: 30px;
}

.button-wrapper {
  width: 216px;
}
</style>
