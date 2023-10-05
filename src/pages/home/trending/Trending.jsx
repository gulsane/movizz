import { useState } from "react";
import ComponentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel/Carousel";
const Trending = () => {
	const [endpoint, setEndpoint] = useState("day");

	const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

	const onChange = (tab) => {
		setEndpoint(String(tab).toLowerCase());
	};

	return (
		<div className="carouselSection">
			<ComponentWrapper>
				<span className="carouselTitle">Trending</span>
				<SwitchTabs tabs={["Day", "Week"]} onTabChange={onChange} />
			</ComponentWrapper>
			<Carousel data={data?.results} loading={loading} />
		</div>
	);
};

export default Trending;
