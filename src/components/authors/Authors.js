import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_DATA } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_DATA);

  if (loading) return <h4>Loading ...</h4>;
  if (error) return <h4>Error ...</h4>;

  const { authors } = data;

  return (
    <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 2px 2px" }}>
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={1} display="flex" alignItems="center">
            <Avatar src={author.avatar.url} />
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              padding={1}
              fontSize="12px"
            >
              {author.name}
            </Typography>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
