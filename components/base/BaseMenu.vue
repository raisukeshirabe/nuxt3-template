<template>
  <VMenu
    ><template #activator="{ props }"
      ><slot name="activator" :props="props"
    /></template>
    <slot />
  </VMenu>
</template>
