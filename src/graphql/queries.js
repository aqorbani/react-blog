import { gql } from "@apollo/client";

const GET_BLOGS_DATA = gql`
  query {
    posts {
      id
      title
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      slug
      cover {
        url
      }
    }
  }
`;

export { GET_BLOGS_DATA };
