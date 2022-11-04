<script setup lang="ts">
interface Props {
  items: { title: string; value: number }[]
  itemTitle?: 'title' | 'text'
  itemValue?: 'value' | 'id'
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
    :items="items"
    :itemTitle="props.itemTitle"
    :itemValue="props.itemValue"
    :disabled="props.disabled"
    :returnObject="props.returnObject"
    :placeholder="props.placeholder"
    multiple
    chips
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
    height: auto;
    font-size: $text-size-sub;
  }
  ::v-deep(.v-field__input) {
    padding: 8px;
    background-color: $color-background-white;
  }
  ::v-deep(.v-field__append-inner) {
    padding-top: 0;
    display: flex;
    align-items: center;
  }
  ::v-deep(.v-chip) {
    margin-right: 4px;
    background-color: $color-primary-lighten-3;
    color: $color-primary-darken-4;
    font-weight: 600;
    border-radius: $border-radius-chip !important;
  }
}
</style>
