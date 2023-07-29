import MyReviewItem from './MyReviewItem'
import useCurrentUser from '../hooks/useCurrentUser';
import { FlatList, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const variables = {
        includeReviews: true,
    };
    const  { currentUser }  = useCurrentUser(variables);

    if (currentUser === undefined) return null;
  
    const { reviews } = currentUser;
    const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

    return (
        <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <MyReviewItem item={item} />}
        onEndReachedThreshold={0.5}
      />
    )
}

export default MyReviews;