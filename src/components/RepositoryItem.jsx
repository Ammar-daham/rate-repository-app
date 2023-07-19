import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Text from './Text'
import theme from '../theme'
import Button from './Button'
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    backgroundColor: theme.colors.cardContainer,
  },
  headContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  bodySubContainer: {
    alignItems: 'center',
  },
})

const RepositoryItem = ({ item, isUrl }) => {
  const handleOpenGitHub = () => {
    if (item.url) {
      Linking.openURL(item.url)
    }
  }

  return (
    <View testID="repositoryItem" style={styles.Container}>
      <View style={styles.headContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text color="primary">{item.language}</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View>
          <Text fontWeight="bold">
            {item.stargazersCount >= 1000
              ? `${(item.stargazersCount / 1000).toFixed(1)}K`
              : item.stargazersCount}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>

        <View style={styles.bodySubContainer}>
          <Text fontWeight="bold">
            {item.forksCount >= 1000
              ? `${(item.forksCount / 1000).toFixed(1)}K`
              : item.forksCount}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>

        <View style={styles.bodySubContainer}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>

        <View style={styles.bodySubContainer}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>

      {isUrl && (
        <View style={styles.bodySubContainer}>
          <Button text={'Open in GitHub'} onSubmit={handleOpenGitHub} />
        </View>
      )}
    </View>
  )
}

export default RepositoryItem
