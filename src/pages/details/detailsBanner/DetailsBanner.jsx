import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img.jsx";

const DetailsBanner = ({ video, crew }) => {
	const { mediaType, id } = useParams();
	const { url } = useSelector((state) => state.home);

	const { data, loading } = useFetch(`/${mediaType}/${id}`);

	return (
		<div className="detailsBanner">
			{!loading ? (
				<>
					{!!data && (
						<React.Fragment>
							<div className="backdrop-img">
								<Img src={url.backdrop + data.backdrop_path} />
							</div>
							<div className="opacity-layer"></div>
						</React.Fragment>
					)}
				</>
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
