import React from "react";
import { IPost } from "../../redux/reducers/profileReducer";
import { IDeletePost } from "../Profile/ProfileContainer";
import s from "./style.module.scss";

interface IPostProps extends IPost {
	deletePost: IDeletePost
}

const Post = (props: IPostProps) => {
	return (
		<li className={s.item}>
			<span>{props.text}</span>
			<button className={["btn", s.deletePost].join(" ")} onClick={() => props.deletePost(props.id)}>Delete post</button>
		</li>
	);
};

export default Post;