import * as yup from 'yup'

import LoginForm from './LoginForm'
import { Formik } from 'formik'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }
  const onSubmit = (values) => {
    console.log('values:', values)
  }

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
