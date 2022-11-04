<script setup lang="ts">
definePageMeta({
  layout: 'no-auth',
})
const { email, password, handleLogin } = useAuth()
</script>

<template>
  <VContainer class="content d-flex flex-column align-center">
    <div width="384" class="content d-flex flex-column align-center pa-8">
      <p class="text-h6 mb-4 font-weight-bold">ログイン</p>
      <BaseTextField
        v-model="email"
        label="メールアドレス"
        class="w-100 mb-6"
      />
      <div class="d-flex flex-column justify-end w-100 mb-12">
        <BaseTextField
          v-model="password"
          type="password"
          label="パスワード"
          class="w-100 mb-6"
        />
        <BaseNuxtLink
          to="/"
          class="text-primary text-body-2 font-weight-regular mb-16"
          style="text-align: right"
          >パスワードを忘れた場合</BaseNuxtLink
        >
      </div>
      <BaseButton class="w-100 mb-4" @onClick="handleLogin"
        >ログイン</BaseButton
      >
      <BaseButton variant="plain" class="w-100">新規登録</BaseButton>
    </div>
  </VContainer>
</template>

<style scoped lang="scss">
.content {
  width: 384px;
  margin-top: 48px;
}
</style>
