import { newsApiUrl, pageSize } from "../constants";

export const loadNews = async (searchQuery: string, page = 1) => {
	const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
	const encodeSearchQuery = encodeURIComponent(searchQuery);
	const url = `${newsApiUrl}?q=${encodeSearchQuery}&apiKey=${newsApiKey}&page=${page}&pageSize=${pageSize}`;
	const response = await fetch(url);
	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message);
	}
	const data = await response.json();
	return data;
};
