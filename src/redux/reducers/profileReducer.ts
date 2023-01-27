import { IAction } from "../actions";
import { ADD_POST, CHANGE_POST_TEXT, DELETE_POST } from "../actionTypes";

export type payloadType = string | undefined | number;

export interface IPost {
	id: number,
	text: payloadType
}

export interface IProfileState {
	posts: IPost[],
	enteredText: payloadType
}

const initialState: IProfileState = {
	posts: [{ id: 1, text: "gello" }],
	enteredText: ""
};


const profileReducer = (state = initialState, action: IAction<payloadType>): IProfileState => {

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
		case DELETE_POST:

			return {
				...state,
				posts: [...state.posts.filter(post => post.id !== action.payload)],
			};

		default:
			return state;
	}
};




export default profileReducer;