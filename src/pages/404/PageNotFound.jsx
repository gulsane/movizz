import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResult from "../../assets/no-results.png";

const PageNotFound = () => {
	return (
		<div className="pageNotFound">
			<ContentWrapper>
				<img className="notFoundImg" src={noResult} />
				{/* <span className="bigText">404</span> */}
				<span className="smallText">Page not found!</span>
			</ContentWrapper>
		</div>
	);
};

export default PageNotFound;
