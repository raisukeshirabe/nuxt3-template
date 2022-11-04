import { useNetworkErrorHandler } from './networkErrorHandler'

export const useAuth = () => {
  const { $repository } = useNuxtApp()
  const { networkErrorHandler } = useNetworkErrorHandler()
  const accessToken = useCookie<string>('accessToken')
  const refreshToken = useCookie<string>('refreshToken')

  const email = ref('')
  const password = ref('')
  const handleLogin = async () => {
    try {
      const res = await $repository('auth').login({
        email: email.value,
        password: password.value,
      })
      accessToken.value = res.data.value.access_token
      refreshToken.value = res.data.value.refresh_token
      // middleware でログインページにリダイレクトした場合は redirectFrom に元のページが入っている
      const to = useRoute().redirectedFrom?.path || '/'
      useRouter().push(to)
    } catch (e) {
      networkErrorHandler(e)
    }
  }

  const handleLogout = async () => {
    accessToken.value = ''
    refreshToken.value = ''
  }

  return {
    email,
    password,
    handleLogin,
    handleLogout,
  }
}
