import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../actions/auth/authActions";
import { auth } from "../config/firebase";
import logging from "../config/logging";

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.uid != null && user.displayName != null) {
          dispatch(login(user.uid, user.displayName));
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        logging.error(errorMessage);
      })
  }
}


