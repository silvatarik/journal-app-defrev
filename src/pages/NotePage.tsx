import React, { useEffect } from "react";
import { Journal } from "../components/notes/journal/Journal";
import logging from "../config/logging";
import IPage from "../interfaces/page";

export const NotePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
      <div className="h-screen">
        <Journal/>
      </div>
  );
};
