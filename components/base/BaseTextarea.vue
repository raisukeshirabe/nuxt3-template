<script setup lang="ts">
interface Props {
  modelValue: string | number
  placeholder?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '',
  label: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div>
    <p v-if="label" class="mb-2 ml-1 text-primary-darken-3 text-body-2">
      {{ label }}
    </p>
    <VTextarea
      v-model="modelValue"
      :placeholder="props.placeholder"
      variant="outlined"
      hideDetails="auto"
      color="primary"
      class="text-body-2"
    />
  </div>
</template>

<style scoped lang="scss">
.v-text-field ::v-deep(.v-field__input) {
  font-size: $text-size-sub;
  background-color: $color-background-white;
}
.v-text-field ::v-deep(.v-field__input) {
  padding: 8px;
  -webkit-mask-image: none;
}

.v-text-field ::v-deep(.v-field__append-inner) {
  padding-top: 4px !important;
  padding-left: 4px !important;
}
</style>
