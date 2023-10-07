import { useState } from "react";
import ComponentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
	const [endpoint, setEndpoint] = useState("movie");

	const { data, loading } = useFetch(`/${endpoint}/popular`);

	const onChange = (tab) => {
		setEndpoint(tab === "Movies" ? "movie" : "tv");
	};

	return (
		<div className="carouselSection">
			<ComponentWrapper>
				<span className="carouselTitle">What's Popular</span>
				<SwitchTabs tabs={["Movies", "TV Shows"]} onTabChange={onChange} />
			</ComponentWrapper>
			<Carousel data={data?.results} loading={loading} endpoint={endpoint} />
		</div>
	);
};

export default Popular;
