import React from "react";
import { textType } from "../../redux/reducers/profileReducer";
import s from "./style.module.scss";

const Post = ({ text }: { text: textType }) => {
	return (
		<li className={s.item}>
			<span>{text}</span>
			<button className={["btn", s.deletePost].join(" ")}>Delete post</button>
		</li>
	);
};

export default Post;