import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const Author = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h4>Error ...</h4>;

  const {
    author: { posts, name, expertise, avatar, description },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" mt={4} fontWeight={700}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" mt={2} fontSize={20}>
            {expertise}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="justify">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography
            component="h3"
            variant="h5"
            fontSize={25}
            fontWeight={700}
          >
            مقالات {name}
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                <CardEL {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Author;
