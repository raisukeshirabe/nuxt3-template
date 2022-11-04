import { Params } from '~~/repositories/usersRepository'
import { useNetworkErrorHandler } from './networkErrorHandler'

export const useUsers = () => {
  const { $repository } = useNuxtApp()
  const { networkErrorHandler } = useNetworkErrorHandler()

  const name = ref<string>('')
  const email = ref<string>('')

  const handleMe = async () => {
    try {
      const data = await $repository('users').get()
      name.value = data.name
      email.value = data.email
    } catch (e) {
      networkErrorHandler(e)
    }
  }

  const handleUpdateMe = async () => {
    const body = {
      name: name.value,
      email: email.value,
    } as Params
    try {
      const data = await $repository('users').patch(body)
      name.value = data.name
      email.value = data.email
    } catch (e) {
      networkErrorHandler(e)
    }
  }

  return {
    name,
    email,
    handleMe,
    handleUpdateMe,
  }
}
