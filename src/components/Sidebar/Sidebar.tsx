import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

const pages = [
	{ id: 1, title: "Profile" }, { id: 2, title: "Messenger" },
];

const Sidebar = () => {
	const navigate = useNavigate();

	const tabs = pages.map(tab => <li onClick={() => navigate(`/${tab.title}`)} className={s.item} key={tab.id}>{tab.title}</li>);

	return (
		<div className={s.sidebar}>
			<ul className={s.list}>
				{tabs}
			</ul>
		</div>
	);
};

export default Sidebar;