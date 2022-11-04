<script setup lang="ts">
interface Props {
  closable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closable: false,
})

const emit = defineEmits<{
  (e: 'onClose'): void
}>()

const onClose = () => {
  emit('onClose')
}
</script>

<template>
  <VChip :closable="props.closable" class="text-body-2" @click:close="onClose">
    <slot />
  </VChip>
</template>

<style scoped lang="scss">
.v-chip {
  margin-right: 4px;
  background-color: $color-primary-lighten-3;
  color: $color-primary-darken-4 !important;
  font-weight: 600;
  border-radius: $border-radius-chip !important;
}
</style>
