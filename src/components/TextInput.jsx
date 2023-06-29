import { TextInput as NativeTextInput } from 'react-native'



const TextInput = ({ style, ...props }) => {

  return <NativeTextInput style={style} placeholder={props.placeholder} {...props}/>
}

export default TextInput
