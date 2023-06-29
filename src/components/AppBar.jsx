import { View, StyleSheet, ScrollView } from 'react-native'
import * as React from 'react'

import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import { Link } from 'react-router-native'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab text="Repositories" />
        </Link>

        <Link to="/sign-in">
          <AppBarTab text="Sign in" />
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
