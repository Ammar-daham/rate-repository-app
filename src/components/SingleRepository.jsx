import React from "react";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import RepositoryItem from "./RepositoryItem";
import useRepositoryDetails from "../hooks/useRepository";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore, loading } = useRepositoryDetails({
    id,
    first: 4
  });

  if (loading) {
    return null;
  }

  const handleListEnd = () => {
    fetchMore();
  };

  const reviews = repository.reviews.edges;

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryItem item={repository} isUrl={true} />}
      onEndReached={handleListEnd}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;