import React from "react";
import Posts from "../Posts/Posts";
import { IProfileDispatchProps, IProfileStateProps } from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo";
import s from "./style.module.scss";

interface IProfileProps extends IProfileDispatchProps, IProfileStateProps { }

const Profile = (props: IProfileProps) => {

	return (
		<div className={s.profile}>
			<ProfileInfo text={props.enteredText} addPost={props.addPost} changeText={props.changeText} />
			<Posts posts={props.posts} />
		</div>
	);
};

export default Profile;
