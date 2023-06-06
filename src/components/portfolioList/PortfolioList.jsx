import "./portfolioList.scss";

export default function PortfolioList({
	index,
	title,
	id,
	active,
	setSelected,
}) {
	return (
		<li
			key={index}
			className={active ? "portfolioList active" : "portfolioList"}
			onClick={() => setSelected(id)}
		>
			{title}
		</li>
	);
}
