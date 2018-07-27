<template>
  <div class="popup">
    <div class="container">
      <div class="title">
        <div class="img">

        </div>
        <div class="title-text">
          You are correct!
        </div>
      </div>
      <div class="description">
        Brushing your teeth twice a day is the best way to stop those nasty cavity monsters.
      </div>
      <component-button>
        Play Again
      </component-button>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
  export default {
    components: {
      ComponentButton
    }
  }
</script>

<style scoped>
.popup {
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 13px;
  color: #ffffff;
  overflow-y: auto;

  background: rgba(11, 30, 38, 0.5);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  padding: 23px;
  background: #25606B;
}

.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background: url('../assets/account-img.jpg') no-repeat center/contain;
}
</style>
