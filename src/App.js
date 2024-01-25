import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layouts/Layout";
import Blog from "./components/blog/Blog";
import Author from "./components/authors/Author";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs/:slug" element={<Blog />}></Route>
          <Route path="/authors/:slug" element={<Author />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
