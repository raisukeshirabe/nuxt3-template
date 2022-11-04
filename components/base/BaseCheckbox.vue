<script setup lang="ts">
interface Props {
  modelValue: boolean | string | object
  value: string | object
  disabled?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  value: '',
  disabled: false,
  label: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | object): void
  (e: 'update:value', value: string | object): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})

const value = computed({
  get: () => props.value,
  set: value => {
    emit('update:value', value)
  },
})
</script>

<template>
  <VCheckbox
    v-model="modelValue"
    :value="value"
    :disabled="props.disabled"
    :label="props.label"
    density="compact"
    color="primary"
  />
</template>
