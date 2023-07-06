import { View, StyleSheet, ScrollView } from 'react-native'
import * as React from 'react'
import { ME } from '../graphql/queries'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import { Link } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { useAuthStorage } from '../hooks/useAuthStorage';


import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
  },
})

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage();


  const { data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    console.log('data: ', data)
  }, [])

  const handleSignOut = async () => {
    // Remove access token or any other authentication-related data from storage
    authStorage.removeAccessToken();
    console.log(authStorage.removeAccessToken())
    // Reset Apollo Client's cache
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab text="Repositories" />
        </Link>

        {data.me && (
          <Link to="/sign-in" onPress={handleSignOut}>
            <AppBarTab text="Sign out" />
          </Link>
        )}
        {data.me == null  && (
          <Link to="/sign-in">
            <AppBarTab text="Sign in" />
          </Link>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
