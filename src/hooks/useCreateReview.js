import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ repoOwnerName, repoName, rating, review }) => {
    try {
      const response = await mutate({
        variables: {
          repoOwnerName,
          repoName,
          rating: parseInt(rating),
          review,
        },
      })

      return response.data;
    } catch (error) {
      console.error('Error creating review: ', error.message)
    }
  }
  return [createReview, result]
}

export default useCreateReview
