import { connect } from "react-redux";
import { addPost, changePostText, deletePost, IAction } from "../../redux/actions";
import { IPost, payloadType } from "../../redux/reducers/profileReducer";
import { IState } from "../../redux/reduxStore";
import Profile from "./Profile";



export interface IProfileStateProps {
	posts: IPost[],
	enteredText: payloadType
}

const mapStateToProps = (state: IState): IProfileStateProps => {
	return {
		posts: state.profilePage.posts,
		enteredText: state.profilePage.enteredText
	};
};


export type IDeletePost = (id: number) => void;

export interface IProfileDispatchProps {
	changeText: (text: string) => void,
	addPost: () => void,
	deletePost: IDeletePost
}


const mapDispatchToProps = (dispatch: (action: IAction<payloadType>) => void): IProfileDispatchProps => {
	return {
		changeText: (text: string) => dispatch(changePostText(text)),
		addPost: () => dispatch(addPost()),
		deletePost: (id: number) => dispatch(deletePost(id))
	};
};


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;