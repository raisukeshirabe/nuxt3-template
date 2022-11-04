<script setup lang="ts">
interface Props {
  modelValue: { title: string; value: number }
  items: { title: string; value: number }[]
  itemTitle?: string
  itemValue?: string
  disabled?: boolean
  returnObject?: boolean
  placeholder?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({ title: '', value: 0 }),
  items: () => [],
  itemTitle: 'title',
  itemValue: 'value',
  disabled: false,
  returnObject: false,
  placeholder: '',
  label: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: { title: string; value: number }): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <p v-if="label" class="mb-2 ml-1 text-primary-darken-3 text-body-2">
    {{ label }}
  </p>
  <VCombobox
    v-model="modelValue"
    :items="items"
    :itemTitle="props.itemTitle"
    :itemValue="props.itemValue"
    :disabled="disabled"
    :returnObject="props.returnObject"
    :placeholder="props.placeholder"
    variant="outlined"
    color="primary"
    class="text-body-2"
  />
</template>

<style scoped lang="scss">
.v-text-field {
  ::v-deep(.v-input__control),
  ::v-deep(.v-field__field),
  ::v-deep(.v-field__input) {
    min-height: $input-height-normal !important;
    height: $input-height-normal;
  }
  ::v-deep(.v-field__input) {
    padding: 6px 8px;
    font-size: $text-size-sub;
  }
  ::v-deep(.v-field__append-inner) {
    padding-top: 0;
    display: flex;
    align-items: center;
  }
}
</style>
