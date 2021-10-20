import { db } from "../config/firebase";
import INote from "../interfaces/note";
import IRootState, { INotes } from "../interfaces/rootState";
import { types } from "../types/types";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { ActiveNotes, setNotes } from "../actions/notesActions";

export const startNewNotes = () => {
  return async (dispatch: any, getState: any) => {
    const state: IRootState = getState();
    const uid = state.auth?.uid;

    const newNote: INote = {
      title: "",
      body: "",
      date: new Date().getTime().toString(),
      url: "",
    };

    const doc = await addDoc(collection(db, `${uid}`, "/journal/notes"), {
      ...newNote,
    });

    dispatch(ActiveNotes(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  };
};

export const addNewNote = (id: string, note: INote) => ({
  type: types.notesAddNew,
  payload: { id, note },
});

export const startLoadingNotes = (uid:string) => {
    return async (dispatch:any) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const loadNotes = async (uid: string) => {
  let notes: INotes[]=[];
  const querySnapshot = await getDocs(
    collection(db, `${uid}`, "/journal/notes")
  );
  querySnapshot.forEach((docu: any) => {
    notes.push({
      id: docu.id,
      notes:{
            title: docu.data().title,
            body: docu.data().body,
            date: docu.data().date,
            url: docu.data().url,
      }
    });
  });
  return notes;
};
