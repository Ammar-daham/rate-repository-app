import { StyleSheet, Text } from 'react-native'

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
    <Text style={styles.tab}>
      <Text style={styles.tabText}>{text}</Text>
    </Text>
  )
}

export default AppBarTab
