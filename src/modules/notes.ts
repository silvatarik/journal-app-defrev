import { db } from "../config/firebase";
import INote from "../interfaces/note";
import IRootState, { INotes } from "../interfaces/rootState";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  ActiveNotes,
  addNewNote,
  deleteNote,
  refreshNotes,
  setNotes,
} from "../actions/notesActions";
import logging from "../config/logging";
import { fileUpload } from "../helpers/fileUpload";
import { sweetAlertLoading, sweetAlertSaving } from "../helpers/alertModals";

/** Crear notes **/
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

/**  Cargar las notas **/

export const startLoadingNotes = (uid: string) => {
  return async (dispatch: any) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const loadNotes = async (uid: string) => {
  let notes: INotes[] = [];
  const querySnapshot = await getDocs(
    collection(db, `${uid}`, "/journal/notes")
  );
  querySnapshot.forEach((docu: any) => {
    notes.push({
      id: docu.id,
      notes: {
        title: docu.data().title,
        body: docu.data().body,
        date: docu.data().date,
        url: docu.data().url,
      },
    });
  });
  return notes;
};

/**  Guardar las notas **/
export const startSaveNote = (note: INotes) => {
  return async (dispatch: any, getState: any) => {
    const state: IRootState = getState();
    const uid = state.auth?.uid;

    const noteToFireStore = { ...note.notes };
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);

    await updateDoc(noteRef, noteToFireStore);
    dispatch(refreshNotes(note));
    sweetAlertSaving('Guardado con Exito');
  };
};

/**  Eliminar las notas **/
export const startDeleteNote = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const state: IRootState = getState();
    const uid = state.auth?.uid;

    const noteRef = doc(db, `${uid}/journal/notes/${id}`);

    try {
      await deleteDoc(noteRef);
      dispatch(deleteNote(id));
    } catch (error) {
      logging.error(error);
    }
  };
};

/**  SubidaImagenes **/
export const startUploading = (file: any) => {
  return async (dispatch: any, getState: any) => {
    const state: IRootState = getState();
    const current = state?.notes;

    const fileUrl = await fileUpload(file);

    sweetAlertLoading();
    if (
      current !== null &&
      current !== undefined &&
      current?.active?.notes?.url !== null
    ) {
      current.active.notes.url = fileUrl;
      dispatch(startSaveNote(current?.active));
    }
  };
};
