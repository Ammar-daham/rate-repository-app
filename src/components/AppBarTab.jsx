import { StyleSheet, Text, Pressable } from 'react-native'

import theme from '../theme';


const styles = StyleSheet.create({
    tabText: {
      color: theme.colors.tabText,
      fontSize: theme.fontSizes.tab,
      fontWeight: theme.fontWeights.bold,
    },
    tab: {
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
  })

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.tabText}>{text}</Text>
    </Pressable>
  )
}

export default AppBarTab
