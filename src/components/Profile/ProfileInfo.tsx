import React from "react";
import { payloadType } from "../../redux/reducers/profileReducer";
import s from "./style.module.scss";

interface IProfileInfoProps {
	changeText: (text: string) => void,
	addPost: () => void,
	text: payloadType
}


const ProfileInfo = (props: IProfileInfoProps) => {

	const onCreatePost = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		props.addPost();
	};

	return (
		<div className={s.top}>
			<div className={s.data}>
				<img src="" alt="avatar" />
				<span>some data</span>
			</div>

			<div className={s.create}>
				<form onSubmit={(e): void => onCreatePost(e)}>
					<input value={props.text} onChange={(e) => props.changeText(e.target.value.toString())} />
					<button type="submit" className="btn">Create post</button>
				</form>
			</div>
		</div >
	);
};

export default ProfileInfo;