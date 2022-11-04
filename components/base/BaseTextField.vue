<script setup lang="ts">
interface Props {
  modelValue: string | number
  type?: 'text' | 'password' | 'number'
  step?: string
  placeholder?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  step: '1',
  placeholder: '',
  label: '',
})

const isVisible = ref(false)

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
    <VTextField
      v-model="modelValue"
      :type="type !== 'password' ? props.type : isVisible ? 'text' : 'password'"
      :appendInnerIcon="
        type !== 'password' ? null : isVisible ? 'mdi-eye' : 'mdi-eye-off'
      "
      :step="props.step"
      :placeholder="props.placeholder"
      variant="outlined"
      hideDetails="auto"
      color="primary"
      class="text-body-2"
      @click:append="isVisible = !isVisible"
    />
  </div>
</template>

<style scoped lang="scss">
.v-text-field ::v-deep(.v-field__input) {
  min-height: $input-height-normal !important;
  height: $input-height-normal;
  font-size: $text-size-sub;
  background-color: $color-background-white;
}
.v-text-field ::v-deep(.v-field__input) {
  padding-left: 8px;
  padding-right: 8px;
}

.v-text-field ::v-deep(.v-field__append-inner) {
  padding-top: 4px !important;
  padding-left: 4px !important;
}
</style>
