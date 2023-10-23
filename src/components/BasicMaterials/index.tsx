import React from "react";
import { Link } from "react-router-dom";

import s from "./index.module.scss";

type CardsItem = {
	imgUrl: string;
	text: string;
	id: number;
	href: string;
};

const cards: CardsItem[] = [
	{ imgUrl: "materials/01.jpg", text: "Песок", id: 1, href: "/materials" },
	{ imgUrl: "materials/02.jpg", text: "Щебень", id: 2, href: "/materials" },
	{ imgUrl: "materials/03.jpg", text: "Асфальтная крошка", id: 3, href: "/materials" },
	{ imgUrl: "materials/04.jpg", text: "Аренда техники", id: 4, href: "/services" }
];

const BasicMaterials: React.FC = () => {
	return (
		<div className={s.Materials}>
			<h1>Основные материалы</h1>
			<div className={s.cards}>
				{cards.map((card) => (
					<Link key={card.id} to={card.href}>
						<div className={s.card}>
							<img width={340} height={524} src={card.imgUrl} alt="material" />
							<p>{card.text}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BasicMaterials;
