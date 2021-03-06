import { combineReducers } from 'redux';
import repoReducer from './repoReducers';

const reducers = combineReducers({
  repositories: repoReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
