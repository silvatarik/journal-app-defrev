import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import logging from '../config/logging';
import IRoute from '../interfaces/route';

export interface IAuthRouteProps {
    auth:boolean;
}

export const ProtectedRoute:React.FunctionComponent<IAuthRouteProps> = props => {
    
    const { children } = props;
    // console.log(props.auth)

    if (!props?.auth)
    {
        logging.info('Unauthorized, redirecting.');
        return <Redirect to='/auth/login' />
    }
    else
    {
        return <>{children}</>
    }
    // return <>{children}</>;
}
