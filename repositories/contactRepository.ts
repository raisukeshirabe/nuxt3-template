import { TokenBasedRepository } from './repository'

export interface Params {
  name: string
  email: string
}

export const urls = {
  array: '/v1/company/contact/',
}

export class ContactRepository extends TokenBasedRepository {
  async post(body: Params) {
    const { data, error } = await useFetch(urls.array, {
      baseURL: this.config.baseUrl,
      initialCache: false,
      method: 'POST',
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
