import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reduxReducer';
import rootSaga from '../sagas/saga'

const temp = localStorage.getItem('reduxState');
const favoriteState = temp ? JSON.parse(temp) : [];

const persistedState = {
    main: {
        favoritesMovies: favoriteState.main.favoritesMovies
    }
} as {}


const sagaMiddleware = createSagaMiddleware({})
const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
