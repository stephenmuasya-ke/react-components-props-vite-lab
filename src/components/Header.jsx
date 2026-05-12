import React from "react";

function Header({ title, author }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>By {author}</p>
    </header>
  );
}

export default Header;