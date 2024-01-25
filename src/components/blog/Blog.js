import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_DATA } from "../../graphql/queries";
import Loader from "../shared/Loader";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";

const Blog = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_DATA, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>Error ...</h4>;

  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <Button onClick={() => navigate(-1)}>
            <ArrowBackRoundedIcon />
          </Button>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.cover.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              fontWeight={700}
              color="secondary"
            >
              {data.post.author.expertise}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5} textAlign="justify">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={5}>
          <CommentForm slug={data.post.slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
