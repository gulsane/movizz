import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";

const SearchResult = () => {
	const [data, setData] = useState(null);
	const [pageNum, setPageNum] = useState(1);
	const [loading, setLoading] = useState(false);
	const { query } = useParams();

	const fetchInitialData = () => {
		setLoading(true);
		fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
			.then((res) => {
				setData(res?.results);
				setPageNum((pre) => pre + 1);
				setLoading(false);
			})
			.catch((err) => {});
	};

	const fetchNextPageData = () => {
		setLoading(true);
		fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
			.then((res) => {
				if (data?.results) {
					setData({ ...data, results: [...data?.results, ...res?.results] });
				} else {
					setData(res);
				}
				setPageNum((pre) => pre + 1);
				setLoading(false);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		fetchInitialData();
	}, [query]);
	return (
		<div className="SearchResultsPage">
			{loading && <Spinner initial={true} />}
		</div>
	);
};

export default SearchResult;
