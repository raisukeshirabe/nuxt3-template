<script setup lang="ts">
interface Props {
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
})
</script>

<template>
  <p v-if="label" class="mb-2 ml-1 text-primary-darken-3 text-body-2">
    {{ props.label }}
  </p>
  <input type="date" class="base-date-picker text-text px-2 py-1" />
</template>

<style scoped lang="scss">
.base-date-picker {
  min-height: $input-height-normal !important;
  height: $input-height-normal;
  font-size: $text-size-sub;
  border: 1px solid $color-border-emphasis;
  border-radius: $border-radius-input;
  background-color: $color-background-white;
  &:focus {
    outline: 1.5px solid $color-primary;
    border: none;
  }
}
</style>
