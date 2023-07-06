import { ButtonHTMLAttributes, memo } from "react";
import s from "./button.module.scss";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(function Button({
	children,
	...rest
}: ButtonPropsType) {
	return (
		<button className={s.button} {...rest}>
			{children}
		</button>
	);
});
