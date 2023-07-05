import * as yup from 'yup'
import LoginForm from './LoginForm'
import { Formik } from 'formik'
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native'



const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();


  const initialValues = {
    username: '',
    password: '',
  }
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      console.log(username, " ", password)
      navigate("/")
    } catch (error) {
      console.log('Sign in failed', error);
    }
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
