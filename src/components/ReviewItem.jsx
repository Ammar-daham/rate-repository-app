import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { format } from 'date-fns';
import theme from "../theme";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "white",
    marginTop: 10
  },
 
  data: {
    color: theme.colors.grayText,
    marginBottom:10
  },
  mainInfo: {
    flexDirection: "column",
    flexShrink: 1
  },
  rating: {
    border: '2px solid #0366d6',
    textAlign: 'center',
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    margin: 10,
  },
  ratingText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    flexGrow: 0,
    marginRight: 20,
    height: 60,
    width: 60,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
  },
});

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'dd-MM-yyyy');

  return (
    <View style={style.container}>
      <View style={style.ratingContainer}>
        <Text style={style.ratingText}>{review.rating}</Text>
      </View>
      <View style={style.mainInfo}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text style={style.data}>{date}</Text>
        <Text>{review.text}</Text>
      </View>

    </View>
  );
};

export default ReviewItem;