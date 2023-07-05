import s from "./loader.module.scss";

export const Loader = () => (
	<div className={s.loader}>
		<span>.</span>
		<span>.</span>
		<span>.</span>
	</div>
);
