import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER)

  const createUser = async ({ username, password }) => {
    try {
      const response = await mutate({
        variables: {
          username,
          password,
        },
      })

      return response.data
    } catch (error) {
      console.error('Error creating user: ', error.message)
    }
  }
  return [createUser, result]
}

export default useCreateUser
