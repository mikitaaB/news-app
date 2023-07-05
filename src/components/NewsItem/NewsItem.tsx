import { memo } from "react";
import s from "./newsItem.module.scss";

type ArticleType = {
	author: string;
	title: string;
	url: string;
	urlToImage: string;
};

export const NewsItem = memo(function NewsItem({
	article,
}: {
	article: ArticleType;
}) {
	return (
		<tr>
			<td>{article.author}</td>
			<td>
				<a href={article.url} className={s.articleLink}>
					{article.title}
				</a>
			</td>
			<td>
				{article.urlToImage && (
					<img
						src={article.urlToImage}
						alt={article.title}
						width="100"
					/>
				)}
			</td>
		</tr>
	);
});
