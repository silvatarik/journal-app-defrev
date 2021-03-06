import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import logging from "../config/logging";
import IRootState from "../interfaces/rootState";

export const ProtectedRoute: React.FunctionComponent<{}> = (
  props
) => {
  const { children } = props;
  const auth = useSelector((state:IRootState) => state.auth);

  if (!auth?.authethicated) {
    logging.info("Unauthorized, redirecting.");
    return <Redirect to="/auth/login" />;
  } else {
    return <>{children}</>;
  }
};
