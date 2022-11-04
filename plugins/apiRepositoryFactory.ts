import {
  apiRepositoryFactory,
  Repositories,
} from '~/factories/apiRepositoryFactory'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      repository: (name: keyof Repositories) => apiRepositoryFactory.get(name),
    },
  }
})
