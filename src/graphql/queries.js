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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      id
      name
      description {
        html
      }
      avatar {
        url
      }
      posts {
        id
        slug
        title
        cover {
          url
        }
      }
      expertise
    }
  }
`;

export { GET_BLOGS_DATA, GET_AUTHORS_DATA, GET_AUTHOR_INFO };
