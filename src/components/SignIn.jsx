//import Text from './Text';
import LoginForm from './LoginForm'
import { Formik } from 'formik'

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }
  const onSubmit = (values) => {
    
    console.log("values:", values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
