import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import Header from "./components/Header";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(QUERY);
  console.log(data);
  return <Header />;
}

export default App;
