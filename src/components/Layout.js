import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header></Header>
      <main style={{ height: "auto" }}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
