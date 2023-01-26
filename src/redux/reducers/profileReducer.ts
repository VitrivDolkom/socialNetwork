import { IAction } from "../actions";
import { CHANGE_POST_TEXT } from "../actionTypes";

export interface IPost {
	id: number,
	text: string
}

export interface IProfileState {
	posts: IPost[],
	enteredText: string | undefined
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

		default:
			return state;
	}
};




export default profileReducer;