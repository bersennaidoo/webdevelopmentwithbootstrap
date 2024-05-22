import React from "react";
import Nav from "@/components/Nav";

function Header() {
  return (
    <header>
      <Nav />
      <h1>
        <img src="images/logo.svg" alt="Top bakery" />
      </h1>
      <p>
        The delicious baked goods you love at Top Bakery...now available to go!
      </p>
    </header>
  );
}

export default Header;
