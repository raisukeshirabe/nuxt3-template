<script setup lang="ts">
const { name, email, content, handleContact } = useContact()

const isSubmitted = ref<boolean>(false)

const handleSubmit = () => {
  handleContact()
  isSubmitted.value = true
}
</script>

<template>
  <VContainer class="content d-flex flex-column align-center">
    <div class="content d-flex flex-column align-center pa-8">
      <h2 class="text-h6 mb-12 font-weight-bold">お問い合わせ</h2>
      <div v-if="!isSubmitted" class="w-100">
        <div class="mb-12">
          <BaseTextField
            v-model="name"
            label="氏名"
            placeholder="例：田中太郎"
            class="w-100 mb-6"
          />
          <BaseTextField
            v-model="email"
            label="メールアドレス"
            placeholder="例：t.tanaka@example.com"
            class="w-100 mb-6"
          />
          <BaseTextarea
            v-model="content"
            label="お問い合わせ内容"
            placeholder="例：お問い合わせ内容を入力"
            class="w-100 mb-16"
          />
        </div>
        <BaseButton class="w-100 mb-4" @onClick="handleSubmit">送信</BaseButton>
      </div>
      <div v-else class="d-flex flex-column align-center">
        <p class="text-body-1 mb-12">お問い合わせ内容を送信しました</p>
        <BaseNuxtLink to="/" class="text-primary">ホームに戻る</BaseNuxtLink>
      </div>
    </div>
  </VContainer>
</template>

<style scoped lang="scss">
.content {
  width: 384px;
  margin-top: 16px;
}
</style>
