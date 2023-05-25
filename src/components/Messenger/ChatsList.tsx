import React from "react";
import s from "./style.module.scss";

interface Chat {
	id: number,
	name: string
}

interface ChatsListProps {
	chats: Chat[]
}


const ChatsList: React.FC<ChatsListProps> = (props) => {

	const chats = props.chats.map(chat => <li key={chat.id}>{chat.name}</li>);

	return (
		<div className={s.list}>
			{chats}
		</div>
	);
};

export default ChatsList;