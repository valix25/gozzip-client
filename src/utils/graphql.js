import { gql } from "@apollo/client";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      comments {
        body
        id
        createdAt
      }
      likes {
        username
      }
      likeCount
      commentCount
    }
  }
`;
