import { combineReducers, createStore } from "redux";
import profileReducer, { IProfileState } from "./reducers/profileReducer";

const rootReducer = combineReducers({
	profilePage: profileReducer,
});

export interface IState {
	profilePage: IProfileState
}


const store = createStore(rootReducer);

export default store;