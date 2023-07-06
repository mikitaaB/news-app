import { useCallback, useEffect, useState } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { NewsList } from "../../components/NewsList/NewsList";
import { loadNews } from "../../services/loadData";
import { Loader } from "../../components/Loader/Loader";
import { ArticleType } from "../../types";
import { Pagination } from "../../components/Pagination/Pagination";
import s from "./mainPage.module.scss";

const MainPage = () => {
	const [articles, setArticles] = useState<ArticleType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [searchQueryValue, setSearchQueryValue] = useState<string>("");
	const [totalResults, setTotalResults] = useState<number>(0);
	const [page, setPage] = useState<number>(1);

	const onSearchHandle = useCallback(async (searchQuery: string) => {
		setSearchQueryValue(searchQuery);
		setPage(1);
		fetchNews(searchQuery, 1);
	}, []);

	const handlePageChange = useCallback(
		(newPage: number) => {
			setPage(newPage);
			fetchNews(searchQueryValue, newPage);
		},
		[searchQueryValue]
	);

	const fetchNews = useCallback(async (searchQuery: string, page: number) => {
		setIsLoading(true);
		setError("");
		try {
			if (searchQuery === "") {
				setArticles([]);
				setTotalResults(0);
			} else {
				const { articles, totalResults } = await loadNews(
					searchQuery,
					page
				);
				setArticles(articles);
				setTotalResults(totalResults);
			}
		} catch (error) {
			console.error(error);
			setError("Failed to load news");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchNews(searchQueryValue, page);
	}, [fetchNews, searchQueryValue, page]);

	return (
		<div className={s.main}>
			<SearchInput onSearchHandle={onSearchHandle} />
			{!error && searchQueryValue.length > 0 && (
				<>
					<Pagination
						page={page}
						totalResults={totalResults}
						onPageChange={handlePageChange}
					/>
					<hr />
				</>
			)}
			{isLoading && <Loader />}
			{error && <div>{error}</div>}
			{!isLoading && !error && searchQueryValue.length > 0 && (
				<NewsList articles={articles} />
			)}
		</div>
	);
};

export default MainPage;
