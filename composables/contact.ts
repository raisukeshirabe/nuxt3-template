import { Params } from '~~/repositories/contactRepository'
import { useNetworkErrorHandler } from './networkErrorHandler'

export const useContact = () => {
  const { $repository } = useNuxtApp()
  const { networkErrorHandler } = useNetworkErrorHandler()

  const name = ref<string>('')
  const email = ref<string>('')
  const content = ref<string>('')

  const handleContact = async () => {
    const body = {
      name: name.value,
      email: email.value,
      content: content.value,
    } as Params
    try {
      await $repository('contact').post(body)
    } catch (e) {
      networkErrorHandler(e)
    }
  }

  return {
    name,
    email,
    content,
    handleContact,
  }
}
