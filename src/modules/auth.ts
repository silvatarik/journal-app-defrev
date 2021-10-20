import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,signOut} from "firebase/auth";
import { login, logout } from "../actions/auth/authActions";
import { auth } from "../config/firebase";
import logging from "../config/logging";


/** Login **/
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

/** Register **/

export const startRegisterWithEmailPassword = (email:string, password:string, name:string) => {
  return (dispatch:any) => {
      createUserWithEmailAndPassword(auth, email, password)
          .then(async ({ user }) => {
              await updateProfile(user, { displayName: name });
              if (user.uid != null && user.displayName != null) {
                dispatch(login(user.uid, user.displayName));
              }
          }).catch((error) => {
            const errorMessage = error.message;
            logging.error(errorMessage);
          });
  }
}

/** Logout **/
export const startLogout = () => {
  return (dispatch:any) => {
      signOut(auth).then(() => {
          dispatch(logout());
      }, function (error) {
        const errorMessage = error.message;
        logging.error(errorMessage);
      });

  }
}


