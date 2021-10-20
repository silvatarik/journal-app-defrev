import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import logging from "../config/logging";
import IRootState from "../interfaces/rootState";

export const PublicRoutes: React.FunctionComponent<{}> = (
  props
) => {
  const { children } = props;
  const auth = useSelector((state:IRootState) => state.auth);

  if (auth?.authethicated) {
    logging.info("You are already logged");
    return <Redirect to="/" />;
  } else {
    return <>{children}</>;
  }
};
