import { gql, useQuery } from "@apollo/client";
import "./App.css";
import { Button } from "@mui/material";

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
  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
    </div>
  );
}

export default App;
