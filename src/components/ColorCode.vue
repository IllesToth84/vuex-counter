<template>
  <div class="color-code-wrapper py-5 d-flex flex-column align-items-center">
    <label class="mb-3" for="color-code">
      <h5>Change counter color:</h5>
    </label>
    <input
      class="w-25 form-control"
      v-model="colorCode"
      type="text"
      placeholder="Enter color code"
      name="color-code"
    />
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
