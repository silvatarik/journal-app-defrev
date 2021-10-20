import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import { login } from "../actions/auth/authActions";
import { auth } from "../config/firebase";
import routes, { routePublic } from "../config/routes";
import { startLoadingNotes } from "../modules/notes";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoutes } from "./PublicRoutes";

const MainRouter: React.FunctionComponent<{}> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        if (user.uid != null && user.displayName != null) {
          dispatch(login(user.uid, user.displayName));
          dispatch(startLoadingNotes(user.uid));
        }
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {routePublic.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routerProps: RouteComponentProps<any>) => (
                <PublicRoutes>
                  <route.component
                    name={route.name}
                    {...routerProps}
                    {...route.props}
                  />
                </PublicRoutes>
              )}
            />
          );
        })}

        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routerProps: RouteComponentProps<any>) => (
                <ProtectedRoute>
                  <route.component
                    name={route.name}
                    {...routerProps}
                    {...route.props}
                  />
                </ProtectedRoute>
              )}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
