import React, { useEffect } from 'react'
import logging from '../../config/logging';
import IPage from '../../interfaces/page'

export const LoginPage:React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    )
}
