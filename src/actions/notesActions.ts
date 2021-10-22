import INote from "../interfaces/note";
import { INotes } from "../interfaces/rootState";
import { types } from "../types/types";

export const ActiveNotes = (id: string, note: INote) => {
  return {
    type: types.notesActive,
    payload: {
      id: id,
      notes: note,
    },
  };
};

export const setNotes = (notes: any) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const addNewNote = (id: string, note: INote) => ({
  type: types.notesAddNew,
  payload: { id, note },
});

export const refreshNotes = (note: INotes) => ({
  type: types.notesUpdated,
  payload: {
    ...note
  },
});

export const deleteNote = (id:string) => ({
  type: types.notesDelete,
  payload: id
})
