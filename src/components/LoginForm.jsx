import { View, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import Button from './Button'

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
    borderColor: theme.colors.error, // Red border color for error
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
    marginBottom: 5,
  },
})

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" styles={styles} />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        styles={styles}
      />

      <Button onSubmit={onSubmit} text={"Sign in"}/>
      
    </View>
  )
}

export default LoginForm
