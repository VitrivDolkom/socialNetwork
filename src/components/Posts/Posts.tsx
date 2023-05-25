import React from "react";
import { IPost } from "../../redux/reducers/profileReducer";
import { IDeletePost } from "../Profile/ProfileContainer";
import Post from "./Post";
import s from "./style.module.scss";


const Posts = ({ posts, deletePost }: { posts: IPost[], deletePost: IDeletePost }) => {

	const allPosts = posts.map(post => <Post key={post.id} text={post.text} id={post.id} deletePost={deletePost} />);

	return (
		<div className={s.list}>
			{allPosts}
		</div>
	);
};

export default Posts;