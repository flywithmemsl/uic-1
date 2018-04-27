<template>
  <NavigationLayout>
    <h1>Select A Character</h1>
    <div class="characters-grid">
      <div class="character-card-wrapper">
        <CharacterCard
          :selected="selectedCharacterType === 'girl'"
          @click="setSelectedCaharacterType('girl')"
          :src="require('@/assets/characters/character-girl-1.png')"
          text="Girl"
        />
      </div>
      <div class="character-card-wrapper">
        <CharacterCard
          :selected="selectedCharacterType === 'boy'"
          @click="setSelectedCaharacterType('boy')"
          :src="require('@/assets/characters/character-boy-1.png')"
          text="Boy"
        />
      </div>
    </div>
    <div class="continue-button">
      <ComponentButton @click="nextStep" >Continue</ComponentButton>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

import CharacterCard from '@/components/cards/CharacterCard'
import ComponentButton from '@/components/Button'

export default {
  data () {
    return {
      selectedCharacterType: null
    }
  },
  components: {
    NavigationLayout,
    CharacterCard,
    ComponentButton
  },
  methods: {
    setSelectedCaharacterType (value) {
      this.selectedCharacterType = value
    },
    nextStep() {
      if (this.selectedCharacterType) {
        this.$router.push('select-character-person')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .characters-grid {
    display: flex;
  }

  .character-card-wrapper {
    flex: 1;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .continue-button {
    margin-top: 180px;
  }
</style>
