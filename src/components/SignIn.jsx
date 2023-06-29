//import Text from './Text';
import BodyMassIndexForm from './BodyMassIndexForm'
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
      {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
