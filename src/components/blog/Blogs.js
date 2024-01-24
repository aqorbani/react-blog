import { useQuery } from "@apollo/client";
import { GET_BLOGS_DATA } from "../../graphql/queries";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_DATA);
  console.log(data);
  return <div>Blogs</div>;
};

export default Blogs;
