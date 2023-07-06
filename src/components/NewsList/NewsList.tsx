import { memo } from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { NoNewsItem } from "../NoNewsItem/NoNewsItem";
import { ArticleType } from "../../types";
import s from "./newsList.module.scss";

type NewsListPropsType = {
	articles: ArticleType[];
};

export const NewsList = memo(function NewsList({
	articles,
}: NewsListPropsType) {
	if (articles.length === 0) {
		return <NoNewsItem />;
	}

	return (
		<div className={s.newsList}>
			<table>
				<thead>
					<tr>
						<th>Author</th>
						<th>Title</th>
						<th>Image</th>
					</tr>
				</thead>
				<tbody>
					{articles.map((article: ArticleType) => (
						<NewsItem key={article.url} article={article} />
					))}
				</tbody>
			</table>
		</div>
	);
});
