<script setup lang="ts">
const { name, email, handleMe, handleUpdateMe } = useUsers()

handleMe()

const handleSubmit = () => {
  handleUpdateMe()
  alert('基本情報を更新しました')
}
</script>

<template>
  <VContainer class="content d-flex flex-column align-center">
    <div width="384" class="content d-flex flex-column align-center pa-8">
      <p class="text-h6 mb-4 font-weight-bold">マイページ</p>
      <BaseTextField v-model="name" label="名前" class="w-100 mb-6" />
      <BaseTextField
        v-model="email"
        label="メールアドレス"
        class="w-100 mb-16"
      />
      <BaseButton class="w-100 mb-4" @onClick="handleSubmit">更新</BaseButton>
    </div>
  </VContainer>
</template>

<style scoped lang="scss">
.content {
  width: 384px;
  margin-top: 48px;
}
</style>
