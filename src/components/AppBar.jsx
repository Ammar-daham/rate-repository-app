import { View, StyleSheet, ScrollView } from 'react-native'
import * as React from 'react'
import { GET_CURRENT_USER } from '../graphql/queries'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import { useQuery } from '@apollo/client'
import { useApolloClient } from '@apollo/client'
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';


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
  const navigate = useNavigate();


  const { data } = useQuery(GET_CURRENT_USER)
  const currentUser = data?.me;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {currentUser ? (
          <React.Fragment>
            <AppBarTab to="/create-review">Create a review</AppBarTab>
            <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
          </React.Fragment>
        ) : (
          <AppBarTab to="/sign-in">Sign in</AppBarTab>
        )}
        
      </ScrollView>
    </View>
  )
}

export default AppBar