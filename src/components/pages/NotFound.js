import React, { Fragment } from "react";
import notFound from "./notFound.png";

export const NotFound = () => {
  return (
    <Fragment>
      <img className="height" src={notFound} alt=""></img>
      <h1 className="lead text-center text-success">
        The page you are looking for does not exist
      </h1>
    </Fragment>
  );
};

export default NotFound;
