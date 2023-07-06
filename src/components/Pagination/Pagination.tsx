import { memo } from "react";
import { Button } from "../Button/Button";
import { pageSize } from "../../constants";
import s from "./pagination.module.scss";

type PaginationPropsType = {
	page: number;
	totalResults: number;
	onPageChange: (page: number) => void;
};

export const Pagination = memo(function Pagination({
	page,
	totalResults,
	onPageChange,
}: PaginationPropsType) {
	const totalPages = Math.ceil(totalResults / pageSize);

	const handlePrevPage = () => onPageChange(page - 1);
	const handleNextPage = () => onPageChange(page + 1);

	return (
		<div className={s.pagination}>
			<Button onClick={handlePrevPage} disabled={page === 1}>
				Prev
			</Button>
			<span className={s.pageNumber}>{page}</span>
			<span className={s.separator}>/</span>
			<span className={s.totalPages}>{totalPages}</span>
			<Button
				onClick={handleNextPage}
				disabled={page === totalPages || totalResults === 0}
			>
				Next
			</Button>
		</div>
	);
});
