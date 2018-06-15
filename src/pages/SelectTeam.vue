<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>Select Team</h1>
    <div class="content team">
      <base-card
        :class="getButtonClassName(1)"
        @click="handleButtonClick(1)">
        <div class="image">
          <img class="card-team-photo" src="@/assets/uic-school-front.jpg" />
        </div>
        <div class="title">UIC School of Dentistry</div>
      </base-card>

      <base-card
        :class="getButtonClassName(2)"
        @click="handleButtonClick(2)">
        <div class="image">
          <img class="card-team-photo" src="@/assets/team-2.jpg" />
        </div>
        <div class="title">Chicago Smiles</div>
      </base-card>

      <base-card
        :class="getButtonClassName(3)"
        @click="handleButtonClick(3)">
        <div class="image">
          <img class="card-team-photo" src="@/assets/team-3.jpg" />
        </div>
        <div class="title">Image Dental</div>
      </base-card>

      <base-card
        :class="getButtonClassName(4)"
        @click="handleButtonClick(4)">
        <div class="image">
          <img class="card-team-photo" src="@/assets/team-4.jpg" />
        </div>
        <div class="title">East Erie Dental</div>
      </base-card>

      <base-card
        :class="getButtonClassName(5)"
        @click="handleButtonClick(5)">
        <div class="image">
          <img class="card-team-photo" src="@/assets/team-5.jpg" />
        </div>
        <div class="title">Stone Dental Group</div>
      </base-card>

      <!-- <base-card @click="goToRoute('/courses')">
        <div class="image">
          <img class="card-photo" src="@/assets/uic-school-front.jpg" />
        </div>
        <div class="title">Strobel Dentistry</div>
      </base-card>

      <base-card @click="goToRoute('/courses')">
        <div class="image">
          <img class="card-photo" src="@/assets/uic-school-front.jpg" />
        </div>
        <div class="title">Chicago Style Smiles</div>
      </base-card>

      <base-card @click="goToRoute('/courses')">
        <div class="image">
          <img class="card-photo" src="@/assets/uic-school-front.jpg" />
        </div>
        <div class="title">Lakeview Smiles</div>
      </base-card>

      <base-card @click="goToRoute('/courses')">
        <div class="image">
          <img class="card-photo" src="@/assets/uic-school-front.jpg" />
        </div>
        <div class="title">Big Smile Dental</div>
      </base-card>

      <base-card @click="goToRoute('/courses')">
        <div class="image">
          <img class="card-photo" src="@/assets/uic-school-front.jpg" />
        </div>
        <div class="title">Chicago Smile Design</div>
      </base-card> -->

      <ComponentButton @click="$router.push('/courses')">Continue </ComponentButton>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import ComponentButton from '@/components/Button'
import BaseCard from '@/components/cards/BaseCard'

export default {
  data () {
    return {
      selected: null
    }
  },
  methods: {
    getButtonClassName (number) {
      return ['card', number === this.selected ? 'card--selected' : '']
    },
     handleButtonClick (number) {
       this.selected = number
     }
  },
  components: {
    BaseCard,
    NavigationLayout,
    ComponentButton
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.team {
  .card {
    margin-bottom: 15px;
    overflow: hidden;
    margin: 7.5px;
    cursor: pointer;
    width: 100%;

    img {
      &.card-team-photo {
        float: left;
        width: 100px;
        padding-right: 10px;
      }
    }
    .title {
      font-family: 'Zilla Slab';
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 0;
      padding-top: 15px;
    }
  }
}
</style>
