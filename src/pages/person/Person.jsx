import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

import useFetch from "../../hooks/useFetch";

import Img from "../../components/lazyLoadImage/Img";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png";

const Person = () => {
	const { person_id } = useParams();
	const { url } = useSelector((state) => state.home);
	const { data, loading } = useFetch(`/person/${person_id}`);

	console.log(data);

	return (
		<div className="personBanner">
			{!loading && (
				<div className="backdrop-img">
					<Img src={`${url.profile}/${data?.profile_path}`} />
				</div>
			)}
			<div className="opacity-layer"></div>

			<ContentWrapper>
				<div className="content">
					<div className="left">
						{data?.profile_path ? (
							<Img
								className="posterImg"
								src={`${url.profile}/${data?.profile_path}`}
							/>
						) : (
							<Img className="posterImg" src={PosterFallback} />
						)}
					</div>
					<div className="right"></div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Person;
