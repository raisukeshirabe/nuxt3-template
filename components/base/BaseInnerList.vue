<script setup lang="ts">
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
})
</script>

<template>
  <VCard class="base-inner-list mx-auto" minWidth="210" tile flat>
    <VListItem flat class="list-item px-3 dense">
      <div>
        <VListItemTitle class="text-white font-weight-bold text-caption">{{
          props.title
        }}</VListItemTitle>
      </div>
    </VListItem>
    <slot name="list-item-content" class="list-item-content"></slot>
  </VCard>
</template>

<style scoped lang="scss">
.base-inner-list {
  font-size: $text-size-sub-explain;
  border-radius: 0;
  .list-item {
    background-color: $color-background-blue-grey;
    border-right: 1px solid $color-background-white !important;
  }
  .v-list-item--density-default {
    min-height: 20px;
  }
}
</style>
