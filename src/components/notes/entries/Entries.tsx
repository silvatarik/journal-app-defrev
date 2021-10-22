import React from "react";
import { useSelector } from "react-redux";
import IRootState from "../../../interfaces/rootState";
import { Entrie } from "./Entrie";


export const Entries: React.FunctionComponent<{}>= props => {
  const data:any = useSelector((state:IRootState) => state.notes);
  return (
    <div className="mt-3 h-full overflow-y-scroll ">
      {
        data?.notes.map((entrie:any) => (
          <Entrie key={entrie.id} id={entrie.id} {...entrie}/>
        ))
      }
    </div>
  );
};
