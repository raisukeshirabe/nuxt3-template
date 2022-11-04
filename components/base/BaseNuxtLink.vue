<script setup lang="ts">
interface Props {
  to: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '',
})
</script>

<template>
  <NuxtLink :to="props.to"><slot></slot></NuxtLink>
</template>
