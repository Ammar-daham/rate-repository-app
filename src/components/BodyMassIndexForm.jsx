import { View, Text, Pressable, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    backgroundColor: theme.colors.cardContainer,
  },
  TextInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.mainPrimary,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  Button: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  ButtonText: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
})

const BodyMassIndexForm = ({ onSubmit }) => {
  return (
    <View style={styles.Container}>
      <FormikTextInput name="username" placeholder="Username" style={styles.TextInput} />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.TextInput}
      />
      <Pressable onPress={onSubmit} style={styles.Button}>
        <Text style={styles.ButtonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default BodyMassIndexForm
