<template>
  <h5 class="mb-3">
    Increase or decrease counter <br />
    with random number:
  </h5>
  <div class="buttons">
    <button class="btn btn-danger" @click="$store.dispatch('decreaseCounter')">
      -
    </button>
    <button class="btn btn-success" @click="$store.dispatch('increaseCounter')">
      +
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
