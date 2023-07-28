import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useNavigate } from 'react-router-native';
import OrderingSelection from './OrderingSelection';

import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ]

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const renderRepositoryItem = ({ item }) => <RepositoryItem item={item} />

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderRepositoryItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  )
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const order_by = orderBy === 'lowest' || orderBy === 'highest'
    ? 'RATING_AVERAGE'
    : 'CREATED_AT';

  const order_direction = orderBy === 'lowest' ? 'ASC' : 'DESC';

  const variables = {
    orderBy: order_by,
    orderDirection: order_direction,
  };

  const { repositories } = useRepositories(variables);

  const handleOrderingChange = (value) => {
    setOrderBy(value);
  };
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []


  const renderRepositoryItem = ({ item }) => (
    <Pressable onPress ={() => navigate(`/repositories/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  )

  return (
    <View>
      <OrderingSelection selectedOrdering={orderBy} onOrderingChange={handleOrderingChange} />
      <FlatList
        data={repositoryNodes}
        renderItem={renderRepositoryItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

export default RepositoryList
