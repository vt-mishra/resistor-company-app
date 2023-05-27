import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "navigation/NotFound";
import { ROOT, DASHBOARD, PAGE1, AUTH_PAGE1 } from "navigation/CONSTANTS";
import Home from "pages/Home";
// import { Page1 } from "pages/Page1";

export const RouterConfig = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* List all public routes here */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE1} component={Page1} /> */}
        {/* <Route path="/login">
          <Login />
        </Route> */}

        {/* List a generic 404-Not Found route here */}
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Routes>
      </React.Fragment>
  );
};
