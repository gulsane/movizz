import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

import useFetch from "../../hooks/useFetch";

import Img from "../../components/lazyLoadImage/Img";

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
		</div>
	);
};

export default Person;
