import IAction from "../interfaces/action";
// import { INotes } from "../interfaces/rootState";
import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdated:
    //   return {
    //     ...state,
    //     notes: state.notes.notes.map((note:any) =>
    //       note.id === action.payload.id ? action.payload.note : note
    //     ),
    //   };
    console.log(action)
    break;
    default:
      return state;
  }
};
