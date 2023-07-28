import { View, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import Button from './Button'
import * as yup from 'yup'
import { Formik } from 'formik'
import useCreateUser from '../hooks/useCreateUser'
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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        styles={styles}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        styles={styles}
        secureTextEntry={true}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        styles={styles}
        secureTextEntry={true}
      />
      <Button onSubmit={onSubmit} text={'Sign up'} />
    </View>
  )
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(5, 'Username must be at least 5 characters').max(30, 'Username must be at most 30 characters'),
    password: yup.string().required('Password is required').min(5, 'Password must be at least 5 characters').max(50, 'Password must be at most 50 characters'),
    passwordConfirmation: yup.string().required('Password confirmation is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const CreateUser = () => {
  const [createUser] = useCreateUser()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const data = await createUser({
        username,
        password,
      })
      if (data.createUser.username) {
        console.log(data.createUser.username)
        navigate(`/sign-in`)
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateUser
