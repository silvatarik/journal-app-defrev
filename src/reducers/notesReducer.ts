import IAction from "../interfaces/action";
// import { INotes } from "../interfaces/rootState";
import { types } from "../types/types";


const initialState = {
    notes: [],
    active:null
}
export const notesReducer = (state = initialState, action:IAction ) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesAddNew: 
            return {
                ...state,
                notes: [action.payload,...state.notes]
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }      
        default:
            return state;
    }
}
