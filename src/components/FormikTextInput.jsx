import React from 'react'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'



const FormikTextInput = ({ name, styles, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        style={[
          styles.textInput,
          showError && styles.errorTextInput // Conditional style for error
        ]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
