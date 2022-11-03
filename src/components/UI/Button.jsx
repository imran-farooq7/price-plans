import "./Button.css";
const Button = ({ isAnnual }) => {
	return (
		<button className={`${isAnnual ? "btn__annual" : null} btn__month`}>
			try for 7 days
		</button>
	);
};

export default Button;
