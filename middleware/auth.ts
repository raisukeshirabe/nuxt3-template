export default defineNuxtRouteMiddleware(() => {
  const accessToken = useCookie<string>('accessToken')
  const refreshToken = useCookie<string>('refreshToken')
  if (
    !accessToken.value ||
    accessToken.value === undefined ||
    !refreshToken.value ||
    refreshToken.value === undefined
  ) {
    const path = '/login'
    return {
      path,
    }
  }
})
