import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Authors from "../authors/Authors";
import Blogs from "../blog/Blogs";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1} padding={3}>
        <Grid xs={12} sm={12} md={12} lg={8}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4}>
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
