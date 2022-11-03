import "./PriceCard.css";
import Button from "./UI/Button";
const PriceCard = ({ title, price, plan, subtitle, annual, fourItems }) => {
	return (
		<div className="col-12 col-md-4 my-3 my-md-0">
			<div className={`${annual ? "card__annual" : null} card `}>
				<div className="card-body">
					<h5 className="card-title price__title">{title}</h5>
					<p className={`${annual ? "price__white" : null} price__subtitle`}>
						{subtitle}
					</p>
					<p className="card-text">
						<span className={`${annual ? "price__white" : null} price__dollar`}>
							$
						</span>
						<span className="price__price">{price}</span>
						<sub className={`${annual ? "price__white" : null} price__plan`}>
							per seat/{plan}
						</sub>
					</p>
					<Button isAnnual={annual} />
					<p>{title} includes:</p>
					<ul className={`price__list ${annual ? "price__list--white" : null}`}>
						<li>CMS integration</li>
						<li>Email and SMS remidner</li>
						<li>Customer support 24/7</li>
						{fourItems ? <li>Templates library</li> : null}
					</ul>
				</div>
				<div
					className={`${annual ? "card__footer--annual" : null} card-footer`}
				>
					See all features
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
