import React from "react";
import { Helmet } from "react-helmet-async";

function Title({ title = "Chatify", description = "chat app" }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  );
}

export default Title;
