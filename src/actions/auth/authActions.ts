import { types } from "../../types/types"

export const login = (uid: string, displayName: string) => {
    return {
      type: types.login,
      payload: {
        uid,
        displayName,
      }
    }
}