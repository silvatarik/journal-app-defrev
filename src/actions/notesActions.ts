import INote from "../interfaces/note"
import { types } from "../types/types"

export const ActiveNotes = (id:string, note:INote) => {
    console.log('Action Note')
    return {
        type: types.notesActive,
        payload: {
            id: id,
            notes:note
        }
    }
}

export const setNotes = (notes:any) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}