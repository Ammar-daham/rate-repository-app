import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useNavigate } from 'react-router-native';
import OrderingSelection from './OrderingSelection';
import useRepositories from '../hooks/useRepositories';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

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
  const [keyword, setKeyword] = useState('');

  const order_by = orderBy === 'lowest' || orderBy === 'highest'
    ? 'RATING_AVERAGE'
    : 'CREATED_AT';

  const order_direction = orderBy === 'lowest' ? 'ASC' : 'DESC';

  const variables = {
    orderBy: order_by,
    orderDirection: order_direction,
    searchKeyword: keyword
  };

  const handleSearch = (value) => {
    setKeyword(value);
  }

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
      <SearchBar searchValue={keyword} handleSearch={handleSearch}/>
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
