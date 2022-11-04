<script setup lang="ts">
interface Props {
  itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 10,
})
</script>

<template>
  <VTable
    hideDefaultFooter
    disableSort
    dense
    :itemsPerPage="props.itemsPerPage"
    class="text-text"
  >
    <slot name="header" class="header"></slot>
    <slot name="body"></slot
  ></VTable>
</template>

<style scoped lang="scss"></style>
