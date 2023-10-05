import { useParams } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";

const DetailsBanner = ({ video, crew }) => {
	const { mediaType, id } = useParams();
	const { data, loading } = useFetch(`/${mediaType}/${id}`);

	return (
		<div className="detailsBanner">
			{!loading ? (
				<div>loading content</div>
			) : (
				<div className="detailsBannerSkeleton">
					<ContentWrapper>
						<div className="left skeleton"></div>
						<div className="right">
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
						</div>
					</ContentWrapper>
				</div>
			)}
		</div>
	);
};

export default DetailsBanner;
