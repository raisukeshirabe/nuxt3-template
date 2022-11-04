<script setup lang="ts">
interface Props {
  modelValue: number
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 1,
  count: 0,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'handlePagenation'): void
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})

const handlePagenation = () => {
  emit('handlePagenation')
}
</script>

<template>
  <VPagination
    v-model="modelValue"
    :length="props.count"
    color="primary"
    activeColor="primary"
    variant="plain"
    class="v-pagination font-weight-bold text-text"
    @next="handlePagenation"
    @prev="handlePagenation"
  />
</template>

<style scoped lang="scss">
.v-pagination ::v-deep(.v-pagination__list) {
  opacity: 100 !important;
  .v-pagination__item {
    &:not(.v-pagination__item--is-active) {
      .v-btn {
        .v-btn__content {
          color: $color-text;
          opacity: 100 !important;
        }
      }
    }

    &.v-pagination__item--is-active {
      .v-btn {
        .v-btn__content {
          font-weight: 600;
        }
      }
    }
  }
  .v-pagination__item,
  .v-pagination__next,
  .v-pagination__prev {
    .v-btn {
      width: 22px;
      height: 22px;
    }
  }
}
</style>
