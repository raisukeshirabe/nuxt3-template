<script setup lang="ts">
interface Props {
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <VDialog v-model="modelValue" fullscreen class="mr-0"><slot /></VDialog>
  <slot name="activator" />
</template>

<style scoped lang="scss">
.v-dialog {
  width: 80%;
  right: 0;
}
</style>
