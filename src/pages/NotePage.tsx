import React from "react";
import { useSelector } from "react-redux";
import { Journal } from "../components/notes/journal/Journal";
import { NothingSelected } from "../components/notes/journal/NothingSelected";
import { SideBar } from "../components/shared/SideBar";
import IPage from "../interfaces/page";
import IRootState, { INotes } from "../interfaces/rootState";

export const NotePage: React.FunctionComponent<IPage> = (props) => {
  // useEffect(() => {
  //   logging.info(`Loading ${props.name}`);
  // }, [props.name]);

  const data: any = useSelector((state: IRootState) => state.notes);
  const currentNote: INotes = data.active;
  
  return (
    <div className="h-screen">
      <div className="h-full flex antialiased text-gray-900 bg-gray-100">
      <SideBar />
        {currentNote === null ? <NothingSelected /> : <Journal />}
      </div>
    </div>
  );
};
