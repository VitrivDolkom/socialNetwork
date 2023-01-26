import React from "react";
import Posts from "../Posts/Posts";
import { IProfileProps } from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo";
import s from "./style.module.scss";

const Profile = (props: IProfileProps) => {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<Posts posts={props.posts} />
		</div>
	);
};

export default Profile;
