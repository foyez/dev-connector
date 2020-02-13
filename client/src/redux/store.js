import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers =
	process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];
process.env.NODE_ENV === 'development' && middlewares.push(logger);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
