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

const GET_AUTHORS_DATA = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_DATA, GET_AUTHORS_DATA };
