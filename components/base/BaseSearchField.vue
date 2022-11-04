<script setup lang="ts">
interface Props {
  modelValue: string[]
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  label: '',
})

const searchText = ref('')

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})

const onKeyDown = () => {
  modelValue.value.push(searchText.value)
  searchText.value = ''
}
</script>

<template>
  <BaseTextField
    v-model="searchText"
    :label="props.label"
    @keypress.enter="onKeyDown"
  />
  <VChipGroup>
    <BaseChip v-for="(chip, index) in modelValue" :key="index" closable>{{
      chip
    }}</BaseChip>
  </VChipGroup>
</template>
