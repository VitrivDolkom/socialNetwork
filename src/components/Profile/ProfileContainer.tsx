import { connect } from "react-redux";
import { IPost } from "../../redux/reducers/profileReducer";
import { IState } from "../../redux/reduxStore";
import Profile from "./Profile";


export interface IProfileProps {
	posts: IPost[],
	enteredText: string | undefined
}

const mapStateToProps = (state: IState): IProfileProps => {
	return {
		posts: state.profilePage.posts,
		enteredText: state.profilePage.enteredText
	};
};



const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;