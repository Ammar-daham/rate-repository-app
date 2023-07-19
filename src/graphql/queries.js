// import { gql } from '@apollo/client'

// export const GET_REPOSITORIES = gql`
//   query {
//     repositories {
//       edges {
//         node {
//           id
//           fullName
//           description
//           language
//           forksCount
//           stargazersCount
//           ratingAverage
//           reviewCount
//           ownerAvatarUrl
//         }
//       }
//     }
//   }
// `

// export const GET_CURRENT_USER = gql`
//   query Me {
//     me {
//       username
//       id
//     }
//   }
// `

import { gql } from '@apollo/client'

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_SINGLE_REPOSITORY = gql`
  query Repositories($id: ID!) {
    repository(id: $id) {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_CURRENT_USER = gql`
  query {
    me {
      ...userBaseFields
    }
  }

  ${USER_BASE_FIELDS}
`;
