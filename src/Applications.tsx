import React from 'react'
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom'
import routes from './config/routes';

export const Applications:React.FunctionComponent<{}> = props => {
    
    return (
        <div>
             <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, index) => {
                            return (
                                <Route key={index} path={route.path} exact={route.exact}
                                    render={(routerProps: RouteComponentProps<any>) => (
                                        <route.component
                                            name={route.name}
                                            {...routerProps}
                                            {...route.props}
                                        />
                                    )}
                                />
                            )
                        })
                    }
                </Switch>
            </BrowserRouter>
        </div>
    )
}
