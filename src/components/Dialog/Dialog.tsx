import React from "react";
import { useTodosQuery } from "./useTodosQuery";

const Dialog = () => {
	const todosQuery = useTodosQuery();

	if (todosQuery.isLoading) {
		return <div>Loading...</div>;
	}

	return <div>Dialog</div>;
};

export default Dialog;
