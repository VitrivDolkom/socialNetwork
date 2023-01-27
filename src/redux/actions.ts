import { ADD_POST, CHANGE_POST_TEXT } from "./actionTypes";


export interface IAction {
	type: string,
	payload?: string
}

export const changePostText = (text: string): IAction => ({
	type: CHANGE_POST_TEXT,
	payload: text
});

export const addPost = (): IAction => ({
	type: ADD_POST
});