<template>
  <div class="menu">
    <div class="container">
      <NavigationControls
        :back="false"
        :close='true'
        @closeClick="$emit('closeClick')"/>
      <base-card @click="goToRoute('/courses')">
        <img class="card-photo" src="@/assets/curses-img.jpg" />
        <div class="text">{{getI18n.courses}}</div>
      </base-card>

      <base-card @click="goToRoute('/brush')">
        <img class="card-photo" src="@/assets/brush-timer-img.jpg" />
        <div class="text">{{getI18n.brushTimer}}</div>
      </base-card>

      <base-card @click="goToRoute('/article')">
        <img class="card-photo" src="@/assets/articles-img.jpg" />
        <div class="text">{{getI18n.articles}}</div>
      </base-card>

      <div class="cards-row">
        <base-card @click="goToRoute('/account')">
          <img class="card-photo" src="@/assets/account-img.jpg" />
          <div class="text">{{getI18n.account}}</div>
        </base-card>

        <base-card @click="goToRoute('/about')">
          <img class="card-photo" src="@/assets/about-img.jpg" />
          <div class="text">{{getI18n.about}}</div>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/cards/BaseCard'
import NavigationControls from '@/components/NavigationControls'

export default {
  name: 'Menu',

  components: {
    BaseCard,
    NavigationControls
  },

  methods: {
    goToRoute (route) {
      this.$emit('closeClick')
      this.$router.push(route)
    }
  },

  computed: {
    getI18n() {
      return this.$t("message.menu")
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background-image: linear-gradient(19deg, #5EA58E 10%, #0A6D60 81%);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  height: 100%;
}

.card {
  margin-bottom: 15px;
  overflow: hidden;
  margin: 7.5px;
  cursor: pointer;

  .text {
    font-family: 'Zilla Slab';
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    padding: 5px;
  }
}

.cards-row {
  display: flex;

  .card {
    flex: 1 1 50%;

    img {
      width: 100%;
    }
  }
}
</style>
