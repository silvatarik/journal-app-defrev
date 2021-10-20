import IAction from "../interfaces/action";
import { types } from "../types/types";

const defaultState = {
  uid: "",
  name: "",
  authethicated: false,
};

export const authReducer = (state = {}, action: IAction) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        authethicated: true,
      };

    case types.logout:
      return { ...defaultState };

    default:
      return state;
  }
};
