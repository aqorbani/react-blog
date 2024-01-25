import { useQuery } from "@apollo/client";
import { GET_BLOGS_DATA } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_DATA);

  if (loading) return <Loader />;
  if (error) return <h4>Error ...</h4>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
