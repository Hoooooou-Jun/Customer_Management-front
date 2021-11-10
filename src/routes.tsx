import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { rootReducerType } from './redux/types';
import TabRouter from './routers/TabRouter';
import StackRouter from './routers/StackRouter';
import DrawerRouter from './routers/DrawerRouter';

const Routes = () => {
    const [onLogin, set_onLogin] = useState(false);
    const message = useSelector((state: rootReducerType) => state.userLoginReducer.message)

    useEffect(() => {
        if ( message === 'Authorize Success' ) {
            set_onLogin(true);
        }
        else {}
    }, [message])

    return (
        onLogin ? (
            <DrawerRouter />
        ) : (
            <StackRouter />
        )
    );
};

export default Routes;