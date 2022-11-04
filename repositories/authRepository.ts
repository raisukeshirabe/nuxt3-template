import { Login } from './entities'

export const urls = {
  login: '/v1/company/auth/login',
}

export class AuthRepository {
  config = useRuntimeConfig()

  async login(args: Login) {
    const { data, error } = await useFetch(urls.login, {
      baseURL: this.config.baseUrl,
      initialCache: false,
      method: 'POST',
      body: args,
    })
    if (data.value) {
      return data.value
    } else {
      const errorRef = error.value as { response: { status: number } }
      throw errorRef.response
    }
  }
}
