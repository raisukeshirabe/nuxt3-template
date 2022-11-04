<script setup lang="ts">
interface Props {
  value: number | string
  disabled?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  disabled: false,
  label: '',
})
</script>

<template>
  <VRadio
    :value="value"
    :disabled="props.disabled"
    :label="props.label"
    inline
    density="compact"
    color="primary"
  />
</template>

<style scoped lang="scss">
.v-radio {
  ::v-deep(.v-label) {
    font-size: $text-size-sub;
    color: $color-text !important;
    opacity: 100;
  }
}
</style>
