import { Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import Authors from "../authors/Authors";
import Blogs from "../blog/Blogs";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1} padding={3}>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
