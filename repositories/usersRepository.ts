import { TokenBasedRepository } from './repository'

export interface Params {
  name: string
  email: string
}

export const urls = {
  me: '/v1/company/users/me',
}

export class UsersRepository extends TokenBasedRepository {
  async get() {
    const { data, error } = await useFetch(urls.me, {
      baseURL: this.config.baseUrl,
      initialCache: false,
      headers: this.headers,
    })
    if (data.value) {
      return data.value
    } else {
      const errorResponse = error.value as { response: { status: number } }
      throw errorResponse.response
    }
  }
  async patch(body: Params) {
    const { data, error } = await useFetch(urls.me, {
      baseURL: this.config.baseUrl,
      initialCache: false,
      method: 'PUT',
      headers: this.headers,
      body: body,
    })
    if (data.value) {
      return data.value
    } else {
      const errorResponse = error.value as { response: { status: number } }
      throw errorResponse.response
    }
  }
}
