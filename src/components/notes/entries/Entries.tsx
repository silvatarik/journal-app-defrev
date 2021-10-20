import React from "react";
import { useSelector } from "react-redux";
import IRootState from "../../../interfaces/rootState";
import { Entrie } from "./Entrie";


export const Entries: React.FunctionComponent<{}>= props => {
  const entries = [0, 1, 2, 3, 4, 5];

  const data:any = useSelector((state:IRootState) => state.notes);
  console.log(data.notes);

  return (
    <div className="mt-3 h-full overflow-y-scroll ">
      {
        data?.notes.map((entrie:any) => (
          <Entrie key={entrie.id} {...entrie}/>
        ))
      }
    </div>
  );
};
