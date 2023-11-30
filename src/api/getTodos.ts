import { instance } from "./instance";

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const getTodos = async () => {
	const response = await instance.get<Todo[]>("/todos");
	return response.data;
};
