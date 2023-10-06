import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const SearchResult = () => {
	const [data, setData] = useState(null);
	const [pageNum, setPageNum] = useState(1);
	const [loading, setLoading] = useState(false);
	const { query } = useParams();

	const fetchInitialData = () => {
		setLoading(true);
		fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
			.then((res) => {
				setData(res);
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
		setPageNum(1);
		fetchInitialData();
	}, [query]);

	return (
		<div className="searchResultsPage">
			{loading && <Spinner initial={true} />}
			{!loading && (
				<ContentWrapper>
					{data?.results?.length > 0 ? (
						<>
							<div className="pageTitle">
								{`Search ${
									data?.total_results > 1 ? "results" : "result"
								} for '${query}'`}
							</div>
						</>
					) : (
						<span className="resultNotFound">Sorry, Results not found</span>
					)}
				</ContentWrapper>
			)}
		</div>
	);
};

export default SearchResult;
