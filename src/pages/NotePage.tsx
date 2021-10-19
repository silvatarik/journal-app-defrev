import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logging from "../config/logging";
import IPage from "../interfaces/page";

export const NotePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1>Note Page</h1>
      <button className="btn btn-primary">
        <Link to="/auth/login">Volver</Link>
      </button>
    </div>
  );
};
