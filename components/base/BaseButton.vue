<script setup lang="ts">
interface Props {
  disabled?: boolean
  prependIcon?: string
  maxWidth?: string
  variant?: 'elevated' | 'flat' | 'text' | 'tonal' | 'outlined' | 'plain'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  prependIcon: '',
  maxWidth: 'auto',
  variant: 'elevated',
})

const emit = defineEmits<{
  (e: 'onClick'): void
}>()

const onClick = () => {
  emit('onClick')
}
</script>

<template>
  <VBtn
    :disabled="props.disabled"
    :prependIcon="props.prependIcon"
    flat
    :maxWidth="props.maxWidth"
    color="primary"
    :variant="props.variant"
    class=".rounded-s font-weight-bold"
    @click="onClick"
  >
    <slot></slot>
  </VBtn>
</template>

<style scoped lang="scss">
.v-btn {
  &.v-btn--variant-elevated {
    color: #fff !important;
  }
}
</style>
