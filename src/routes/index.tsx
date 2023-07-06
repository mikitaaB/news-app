import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";

const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));

export const Pages = () => (
	<div>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<MainPage />} />
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Suspense>
	</div>
);
