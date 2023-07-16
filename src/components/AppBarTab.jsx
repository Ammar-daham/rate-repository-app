import { StyleSheet, Text, View, Pressable} from 'react-native'
import { Link } from 'react-router-native'

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


const AppBarTab = ({ children, to, ...props }) => {
  const content = (
    <View style={styles.tab} {...props}>
      <Text fontWeight="bold" style={styles.tabText}>
        {children}
      </Text>
    </View>
  );
  
  return to ? (
    <Link to={to} {...props}>
      {content}
    </Link>
  ) : (
    <Pressable {...props}>{content}</Pressable>
    );
  };
  
  export default AppBarTab