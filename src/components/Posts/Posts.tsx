import React from "react";
import { IPost } from "../../redux/reducers/profileReducer";
import Post from "./Post";
import s from "./style.module.scss";



const Posts = ({ posts }: { posts: IPost[] }) => {

	const allPosts = posts.map(post => <Post key={post.id} text={post.text} />);

	return (
		<div className={s.list}>
			{allPosts}
		</div>
	);
};

export default Posts;