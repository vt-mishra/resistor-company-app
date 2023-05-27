import React from "react";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "./CONSTANTS";

export const NotFound = () => {
  return (
    <>
      {/* Page Not Found! */}
      <LinkRoute to={ROOT}>Home</LinkRoute>
      <h4 variant="h2">404: page not found!</h4>
    </>
  );
};
