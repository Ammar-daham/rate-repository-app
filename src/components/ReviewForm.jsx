import { View, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import Button from './Button'
import * as yup from 'yup'
import { Formik } from 'formik'
import useCreateReview from '../hooks/useCreateReview'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.cardContainer,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.mainPrimary,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorTextInput: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
    marginBottom: 5,
  },
})

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="repoOwnerName"
        placeholder="Repository owner name"
        styles={styles}
      />
      <FormikTextInput
        name="repoName"
        placeholder="Repository name"
        styles={styles}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        styles={styles}
      />
      <FormikTextInput
        name="review"
        placeholder="Review"
        styles={styles}
        multiline
      />
      <Button onSubmit={onSubmit} text={'Create a review'} />
    </View>
  )
}

const validationSchema = yup.object().shape({
  repoOwnerName: yup.string().required('Repository owner name is required'),
  repoName: yup.string().required('Repository name required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100'),
})

const initialValues = {
  repoOwnerName: '',
  repoName: '',
  rating: '',
  review: '',
}

const CreateReview = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { repoOwnerName, repoName, rating, review } = values

    try {
      const data = await createReview({
        repoOwnerName,
        repoName,
        rating,
        review,
      })
      if (data.createReview.repositoryId) {
        navigate(`/repositories/${data.createReview.repositoryId}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview
