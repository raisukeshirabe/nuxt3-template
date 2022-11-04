export class TokenBasedRepository {
  router = useRouter()
  config = useRuntimeConfig()
  accessToken = useCookie<string>('accessToken')
  refreshToken = useCookie<string>('refreshToken')

  headers = {}
  constructor() {
    if (!this.accessToken.value || this.accessToken.value === undefined) {
      new Promise(() => {
        useFetch('/v1/company/auth/refresh-token', {
          baseURL: this.config.baseUrl,
          initialCache: false,
          method: 'POST',
          body: {
            refreshToken: this.refreshToken.value,
          },
        }).then(res => {
          const data:
            | { accessToken?: string; refreshToken?: string }
            | undefined = res.data.value
          if (res.data.value) {
            this.accessToken.value = data.accessToken
            this.refreshToken.value = data.refreshToken
          } else {
            this.accessToken.value = undefined
            this.refreshToken.value = undefined
          }
        })
      })
    } else {
      this.headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.accessToken.value}`,
      }
    }
  }
}
