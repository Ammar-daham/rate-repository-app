import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($repoOwnerName: String!, $repoName: String!, $rating: Int!, $review: String!) {
    createReview(review: {ownerName: $repoOwnerName, repositoryName: $repoName, rating: $rating, text: $review}) {
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser( $username: String!, $password: String!) {
    createUser(user: {username: $username, password: $password}) {
      username
    }
  }
`;
