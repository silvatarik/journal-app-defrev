import React from "react";
import IRootState, { INotes } from "../../../interfaces/rootState";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { ActiveNotes } from "../../../actions/notesActions";

export const Entrie: React.FunctionComponent<INotes> = (props) => {

  const data: any = useSelector((state: IRootState) => state.notes);
  const currentNote: INotes = data.active;

  const noteValues = props.notes;
  const dispatch = useDispatch();

  const handleClick = () => {
    let updNote = {
      title: noteValues?.title || '',
      body: noteValues?.body || '',
      date: noteValues?.date || moment(new Date().getTime()).format('ll'),
      url: noteValues?.url || ''
    }
    dispatch(ActiveNotes(props.id,updNote));
  }

  return (
    <article
      tabIndex={0}
      onClick={handleClick}
      className="cursor-pointer overflow-x-hidden border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500"
    >
      <img
        className="h-28 w-full rounded-md"
        src="https://picsum.photos/seed/picsum/200/300"
        alt="img random"
      />
      <div className="flex-1">
      {(currentNote?.id === props.id) && (<span className="badge badge-primary ml-1">Selected</span>)}
        <header className="mb-1">
          {noteValues?.title && noteValues.title !== "" ? noteValues.title : ""}
        </header>
        <p className="text-gray-600 truncate w-60 pl-1 pr-2">
          {noteValues?.body && noteValues.body !== "" ? noteValues.body : ""}
        </p>
        <footer className="text-gray-500 mt-2 text-sm">
          {noteValues?.date ? moment(parseInt(noteValues.date)).format('ll') : moment(new Date().getTime()).format('ll')}
        </footer>
      </div>
    </article>
  );
};
