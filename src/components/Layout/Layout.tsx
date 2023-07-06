import { Outlet } from "react-router-dom";
import s from "./layout.module.scss";

export const Layout = () => {
	return (
		<div>
			<header className={s.header}>
				<h1>News App</h1>
			</header>
			<main className={s.main}>
				<Outlet />
			</main>
			<footer className={s.footer}>
				<p>
					&copy; News App. All rights reserved.{" "}
					<a
						href="https://newsapi.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						NewsAPI.org
					</a>
				</p>
			</footer>
		</div>
	);
};
