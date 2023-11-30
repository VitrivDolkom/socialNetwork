import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialog from "./components/Dialog/Dialog";
import Messenger from "./components/Messenger/Messenger";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./redux/reduxStore";
import s from "./styles/App.module.scss";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className={s.app}>
					<Navbar />
					<Sidebar />
					<div className={s.content}>
						<Routes>
							<Route path="/" element={<main>main page</main>} />
							<Route path="/profile" element={<ProfileContainer />} />
							<Route path="/messenger" element={<Messenger />} />
							<Route path="/messenger/:user" element={<Dialog />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
