import React from "react";
import { Entrie } from "./Entrie";

export const Entries = () => {
  const entries = [0, 1, 2, 3, 4, 5];
  return (
    <div className="mt-3 overflow-y-scroll">
      {entries.map((entrie, index) => (
        <Entrie key={index} />
      ))}
    </div>
  );
};
