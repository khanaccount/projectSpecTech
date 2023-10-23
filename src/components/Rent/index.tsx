import React from "react";
import s from "./index.module.scss";

type CardsItem = {
	imgUrl: string;
	title: string;
	rentInfo: string;
	additionalMaterials?: {
		name: string;
		price: string;
	}[];
	id: number;
};

const cards: CardsItem[] = [
	{
		imgUrl: "rent/01.jpg",
		title: "Аренда спецтехники",
		rentInfo:
			"Мы перелагаем доступные условия аренды различной техники посуточно и на длительный срок. ",
		id: 0
	},
	{
		imgUrl: "rent/02.jpg",
		title: "Аренда самосвалов",
		rentInfo:
			"Мы перелагаем доступные условия аренды различной техники посуточно и на длительный срок. ",
		additionalMaterials: [
			{
				name: "Самосвал 20куб",
				price: "от 1500 ₽ смена"
			},
			{
				name: "Самосвал 25куб",
				price: "от 1500 ₽ смена"
			},
			{
				name: "Самосвал 30куб",
				price: "от 1600 ₽ смена"
			}
		],
		id: 1
	}
];

export const Rent: React.FC = () => {
	return (
		<div className={s.container}>
			<div className={s.Materials}>
				{cards.map((card) => (
					<div key={card.id} className={s.MaterialsCard}>
						<img width={580} height={480} src={card.imgUrl} alt={card.title} />
						<div className={s.MaterialsCardInfo}>
							<h2>{card.title}</h2>
							<p>{card.rentInfo}</p>
							<div className={s.MaterialsCardInfoCost}>
								{card.additionalMaterials &&
									card.additionalMaterials.map((material, index) => (
										<div className={s.cards} key={index}>
											<p className={s.name}>{material.name}</p>
											<span className={s.line}></span>
											<p className={s.price}>
												<span>От</span>
												<span className={s.priceValue}>{material.price}</span>
											</p>
										</div>
									))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
