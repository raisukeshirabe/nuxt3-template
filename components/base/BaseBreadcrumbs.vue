<script setup lang="ts">
interface Props {
  items: { title: string; href: string }[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})
</script>

<template>
  <VBreadcrumbs
    :items="props.items"
    color="primary"
    activeClass="-active"
    class="px-0 py-2"
  />
</template>

<style scoped lang="scss">
.v-breadcrumbs {
  ::v-deep(.v-breadcrumbs-item) {
    font-size: $text-size-sub;
    &.v-breadcrumbs-item--disabled {
      display: none;
    }
  }
  ::v-deep(.v-breadcrumbs-divider) {
    padding: 0 4px;
  }
}
</style>
