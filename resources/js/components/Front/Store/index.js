
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";

import Reducers from '../Reducer';
import { RunSaga } from '../SagaMiddleWare/sagas';




    const sagaMiddleware = createSagaMiddleware();

    const FrontStore = createStore(
        Reducers,
        {},
        applyMiddleware(sagaMiddleware)
    );


    sagaMiddleware.run(RunSaga);

    export default FrontStore;