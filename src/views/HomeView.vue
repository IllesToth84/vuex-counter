<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counters-wrapper">
      <CounterComponent />
      <CounterSquared />
    </div>

    <CounterButtons />
    <ColorCode />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

  components: {
    CounterComponent: require('@/components/CounterComponent.vue').default,
    CounterSquared: require('@/components/CounterSquared.vue').default,
    CounterButtons: require('@/components/CounterButtons.vue').default,
    ColorCode: require('@/components/ColorCode.vue').default,
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counters-wrapper {
  padding: 2rem 0;
}

.counter {
  font-size: 6rem;
}

.counter-squared {
  font-size: 1.6rem;
}

.counter-squared sup {
  font-size: 1rem;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
