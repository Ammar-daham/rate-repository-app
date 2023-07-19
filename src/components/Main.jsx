import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate} from 'react-router-native'
import RepositoryList from './RepositoryList'
import SingleRepository from './SingleRepository'
import AppBar from './AppBar'

import theme from '../theme'
import SignIn from './SignIn'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainPrimary,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
