export const useNetworkErrorHandler = () => {
  const networkErrorHandler = (e: { status: number }) => {
    if (e.status === 403) {
      useRouter().push('/login')
    } else {
      console.log(e)
    }
  }
  return {
    networkErrorHandler,
  }
}
