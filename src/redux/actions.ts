import { ADD_POST, CHANGE_POST_TEXT, DELETE_POST } from "./actionTypes";


export interface IAction<T> {
	type: string,
	payload?: T
}

export const changePostText = (text: string): IAction<string> => ({
	type: CHANGE_POST_TEXT,
	payload: text
});

export const addPost = (): IAction<undefined> => ({
	type: ADD_POST
});

export const deletePost = (id: number): IAction<number> => ({
	type: DELETE_POST,
	payload: id
});