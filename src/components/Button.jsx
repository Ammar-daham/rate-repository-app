import { Text, Pressable, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      },
      buttonText: {
        color: "white",
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold
      },
})


const Button = ({ onSubmit, text}) => {

    return (
        <Pressable onPress={onSubmit} testID='signInBtn' style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )

}

export default Button