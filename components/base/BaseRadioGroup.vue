<script setup lang="ts">
interface Props {
  modelValue: number | string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <VRadioGroup v-model="modelValue" inline hideDetails="auto"
    ><slot
  /></VRadioGroup>
</template>
