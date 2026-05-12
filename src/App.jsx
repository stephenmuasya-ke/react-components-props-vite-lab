import React from "react";
import blog from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <Header title={blog.title} author={blog.author} />
      <About about={blog.about} />
      <ArticleList articles={blog.articles} />
    </div>
  );
}

export default App;