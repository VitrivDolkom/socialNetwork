import React from "react";
import s from "./style.module.scss";


const ProfileInfo = () => {

	const onCreatePost = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<div className={s.top}>
			<div className={s.data}>
				<img src="" alt="avatar" />
				<span>some data</span>
			</div>

			<div className={s.create}>
				<form onSubmit={(e): void => onCreatePost(e)}>
					<input />
					<button type="submit">Create post</button>
				</form>
			</div>
		</div >
	);
};

export default ProfileInfo;