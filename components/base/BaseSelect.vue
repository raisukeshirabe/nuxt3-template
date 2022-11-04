<script setup lang="ts">
interface Props {
  items: { title: string; value: number }[]
  itemTitle?: string
  itemValue?: string
  disabled?: boolean
  returnObject?: boolean
  placeholder?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  itemTitle: 'title',
  itemValue: 'value',
  disabled: false,
  returnObject: false,
  placeholder: '',
  label: '',
})
</script>

<template>
  <p v-if="label" class="mb-2 ml-1 text-primary-darken-3 text-body-2">
    {{ label }}
  </p>
  <VSelect
    :items="props.items"
    :disabled="props.disabled"
    :itemTitle="props.itemTitle"
    :itemValue="props.itemValue"
    :returnObject="props.returnObject"
    :placeholder="props.placeholder"
    dense
    variant="outlined"
    hideDetails="auto"
    color="primary"
    class="text-body-2"
  />
</template>

<style scoped lang="scss">
.v-select {
  ::v-deep(.v-field),
  ::v-deep(.v-field__input) {
    min-height: $input-height-normal !important;
    height: $input-height-normal;
    font-size: $text-size-sub;
  }
  ::v-deep(.v-field__input) {
    padding-left: 8px;
    padding-right: 8px;
    background-color: $color-background-white;
  }
  ::v-deep(.v-field__append-inner) {
    padding-top: 0;
    display: flex;
    align-items: center;
  }
  ::v-deep(.v-select__selection) {
    margin-top: -11px;
  }
}
</style>
