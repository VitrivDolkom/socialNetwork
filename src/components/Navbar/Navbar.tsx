import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className={s.nav}>
			<div className={s.goHome} onClick={() => navigate("/")}> go home</div>
		</div>
	);
};

export default Navbar;