<script setup lang="ts">
const { handleLogout } = useAuth()
const { name, email, handleMe } = useUsers()
const router = useRouter()

const isMenu = ref<boolean>(false)

handleMe()

const logout = () => {
  handleLogout()
  router.push('/login')
}
</script>

<template>
  <VAppBar app flat height="88" class="base-app-bar">
    <div class="d-flex flex-row w-100 px-6 py-3">
      <div class="d-flex flex-row justify-space-between align-center w-100">
        <nav class="d-flex flex-row">
          <BaseNuxtLink
            to="/"
            :class="
              $route.path === '/'
                ? 'text-primary font-weight-bold'
                : 'text-text'
            "
            class="text-body-2 mr-4"
            >ホーム</BaseNuxtLink
          >
          <BaseNuxtLink
            to="/components"
            :class="
              $route.path === '/components'
                ? 'text-primary font-weight-bold'
                : 'text-text'
            "
            class="text-body-2 mr-4"
            >コンポーネント</BaseNuxtLink
          >
          <BaseNuxtLink
            to="/contact"
            :class="
              $route.path === '/contact'
                ? 'text-primary font-weight-bold'
                : 'text-text'
            "
            class="text-body-2 mr-4"
            >お問い合わせ</BaseNuxtLink
          >
        </nav>
        <p>{{ name }}</p>
        <div class="right">
          <BaseButton
            v-if="!email"
            variant="outlined"
            class="mr-2"
            @onClick="useRouter().push('/login')"
            >ログイン</BaseButton
          >
          <BaseButton
            v-else
            variant="elevated"
            prependIcon="mdi-email"
            class="text-white mr-2"
            @onClick="useRouter().push('/contact')"
            >お問い合わせ</BaseButton
          >
          <BaseMenu v-model="isMenu">
            <template #activator="{ props }">
              <VAvatar
                v-bind="props"
                color="primary"
                size="48"
                class="v-avatar"
              />
            </template>
            <VList>
              <VListItem>
                <VListItemTitle @click="router.push('/mypage')"
                  >マイページ</VListItemTitle
                >
              </VListItem>
              <VListItem>
                <VListItemTitle>パスワード設定</VListItemTitle>
              </VListItem>
              <VListItem @click="logout">
                <VListItemTitle>ログアウト</VListItemTitle>
              </VListItem>
            </VList>
          </BaseMenu>
        </div>
      </div>
    </div>
  </VAppBar>
</template>

<style scoped lang="scss">
.base-app-bar {
  border-bottom: 3px solid $color-primary;
  a {
    text-decoration: none;
  }
  .v-avatar {
    background-color: $color-primary-lighten-1;
  }
}
</style>
