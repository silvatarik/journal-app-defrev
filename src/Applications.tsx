import React from 'react'
import { Provider} from 'react-redux';
import MainRouter from './routers/MainRouter';

import { store } from './store/store';

export const Applications:React.FunctionComponent<{}> = props => {
    return (
        <Provider store={store}>
            <MainRouter/>
        </Provider>
    )
}
