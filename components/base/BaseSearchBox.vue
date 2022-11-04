<script setup lang="ts">
interface Props {
  titleText?: string
  titleIcon?: string
  btnVariant?: 'elevated' | 'flat' | 'text' | 'tonal' | 'outlined' | 'plain'
  btnText?: string
  btnMaxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  titleText: '絞り込み',
  titleIcon: 'mdi-filter',
  btnVariant: 'elevated',
  btnText: '絞り込み',
  btnMaxWidth: 'auto',
})

const emit = defineEmits<{
  (e: 'onClickClear'): void
  (e: 'handleSearch'): void
}>()

const onClickClear = () => {
  emit('onClickClear')
}

const handleSearch = () => {
  emit('handleSearch')
}
</script>

<template>
  <div class="base-search-box">
    <ul>
      <div
        class="BlocTitle d-flex flex-row justify-space-between align-center px-6 py-4"
      >
        <div class="d-flex flex-row">
          <VIcon size="small" class="mr-2 text-primary-darken-3">{{
            props.titleIcon
          }}</VIcon>
          <h3 class="text-primary-darken-3 text-body-2 font-weight-bold">
            {{ props.titleText }}
          </h3>
        </div>
        <BaseButton
          variant="plain"
          size="small"
          class="font-weight-bold"
          @onClick="onClickClear"
          >条件をクリア</BaseButton
        >
      </div>
      <VDivider color="border"></VDivider>
      <slot></slot>
      <div class="action pa-6 d-flex align-center justify-center">
        <BaseButton
          :variant="props.btnVariant"
          :maxWidth="props.btnMaxWidth"
          class="w-100"
          @onClick="handleSearch"
          >{{ props.btnText }}</BaseButton
        >
      </div>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.base-search-box {
  background-color: $color-background-pale;
  border-right: 1px solid $color-border;
  .action {
    background-color: $color-background-pale;
    position: sticky;
    bottom: 44px;
    filter: drop-shadow(-1px 0px 2px rgba(0, 0, 0, 0.1));
  }
}
</style>
