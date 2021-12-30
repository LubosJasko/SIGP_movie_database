import { combineReducers } from 'redux';
import main  from './main/main';

const rootReducer = combineReducers({
    main,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
