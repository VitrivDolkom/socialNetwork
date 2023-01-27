import { connect } from "react-redux";
import { addPost, changePostText, IAction } from "../../redux/actions";
import { IPost, textType } from "../../redux/reducers/profileReducer";
import { IState } from "../../redux/reduxStore";
import Profile from "./Profile";



export interface IProfileStateProps {
	posts: IPost[],
	enteredText: textType
}

const mapStateToProps = (state: IState): IProfileStateProps => {
	return {
		posts: state.profilePage.posts,
		enteredText: state.profilePage.enteredText
	};
};


export interface IProfileDispatchProps {
	changeText: (text: string) => void,
	addPost: () => void
}

const mapDispatchToProps = (dispatch: (action: IAction) => void): IProfileDispatchProps => {
	return {
		changeText: (text: string) => dispatch(changePostText(text)),
		addPost: () => dispatch(addPost())
	};
};


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;