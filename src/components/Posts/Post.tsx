import React from "react";
import { IPost } from "../../redux/reducers/profileReducer";

const Post = ({ text }: { text: string }) => {
	return (
		<li>
			{text}
		</li>
	);
};

export default Post;