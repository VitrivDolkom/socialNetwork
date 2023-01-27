import { IAction } from "../actions";
import { ADD_POST, CHANGE_POST_TEXT } from "../actionTypes";

export type textType = string | undefined;

export interface IPost {
	id: number,
	text: textType
}

export interface IProfileState {
	posts: IPost[],
	enteredText: textType
}

const initialState: IProfileState = {
	posts: [{ id: 1, text: "gello" }],
	enteredText: ""
};


const profileReducer = (state = initialState, action: IAction): IProfileState => {

	switch (action.type) {
		case CHANGE_POST_TEXT:

			return {
				...state,
				enteredText: action.payload
			};

		case ADD_POST:
			if (state.enteredText === "") {
				return state;
			}

			return {
				...state,
				posts: [{ id: Math.random(), text: state.enteredText }, ...state.posts],
				enteredText: ""
			};

		default:
			return state;
	}
};




export default profileReducer;