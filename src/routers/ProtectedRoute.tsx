import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import logging from "../config/logging";

export const ProtectedRoute: React.FunctionComponent<{}> = (
  props
) => {
  const { children } = props;
  const auth = useSelector<any>((state) => state.auth);

  if (auth === {}) {
    logging.info("Unauthorized, redirecting.");
    return <Redirect to="/auth/login" />;
  } else {
    return <>{children}</>;
  }
};
