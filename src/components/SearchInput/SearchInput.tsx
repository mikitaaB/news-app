import { useCallback, memo, ChangeEvent, useMemo } from "react";
import debounce from "lodash/debounce";
import s from "./searchInput.module.scss";

type SearchInputPropsType = {
	onSearchHandle: (searchQuery: string) => void;
};

export const SearchInput = memo(function SearchInput({
	onSearchHandle,
}: SearchInputPropsType) {
	const debouncedOnSearchHandle = useMemo(
		() =>
			debounce((searchQuery: string) => {
				onSearchHandle(searchQuery);
			}, 1000),
		[onSearchHandle]
	);

	const onHandleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			debouncedOnSearchHandle(e.currentTarget.value.trim());
		},
		[debouncedOnSearchHandle]
	);

	return (
		<div className={s.searchInput}>
			<input
				type="text"
				id="searchInput"
				maxLength={500}
				onChange={onHandleChange}
			/>
		</div>
	);
});
