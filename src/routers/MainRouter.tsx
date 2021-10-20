import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
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
import { ProtectedRoute } from "./ProtectedRoute";

const MainRouter: React.FunctionComponent<{}> = (props) => {
  const dispatch = useDispatch();
  const [isAunthenthicate, setisAunthenthicate] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        if (user.uid != null && user.displayName != null) {
          dispatch(login(user.uid, user.displayName));
          setisAunthenthicate(true);
        }
      } else {
        setisAunthenthicate(false);
      }
    });
  }, [auth, dispatch, setisAunthenthicate]);

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
                  <route.component
                    name={route.name}
                    {...routerProps}
                    {...route.props}
                  />
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
