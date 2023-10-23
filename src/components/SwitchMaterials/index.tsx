import React, { useState } from "react";
import s from "./index.module.scss";

type CardsItem = {
	imgUrl: string;
	title: string;
	materilInfo: string;
	additionalMaterials: {
		name: string;
		price: string;
	}[];
	id: number;
};
type SwitcherItem = {
	title: string;
	index: number;
};

const cards: CardsItem[] = [
	{
		imgUrl: "switchMaterials/sand.jpg",
		title: "Песок",
		materilInfo:
			"Зернистость песка влияет на водопотребность раствора и его прочностные характеристики – чем больше модуль крупности, тем выше прочность бетона и меньше расход воды для его приготовления.Увеличение зернистости свидетельствует о большем среднем диаметре частиц песка. Это ведет к снижению пластичности цементного раствора. Поэтому зернистость песка должна подбираться в зависимости от назначения и условий, при которых будет эксплуатироваться бетон.",
		additionalMaterials: [
			{
				name: "Песок карьерный 1.91",
				price: "От 160 ₽"
			},
			{
				name: "Песок карьерный 1.40",
				price: "От 160 ₽"
			},
			{
				name: "Песок карьерный 1.10",
				price: "От 160 ₽"
			},
			{
				name: "Песок намывной",
				price: "От 250 ₽"
			}
		],
		id: 0
	},
	{
		imgUrl: "switchMaterials/crushedStone.jpg",
		title: "Щебень",
		materilInfo:
			"Щебень размером 5-20 мм. Это самый востребованный в строительстве и производстве ЖБИ материал, его также применяют для строительства дорог и создания фундамента. Такой щебень незаменим и в частном строительстве при подготовке бетона. Щебень 20-40 мм. Используется в дренажных работах, при строительстве трамвайных и железнодорожных путей, а также может применяться при обустройстве фундаментов зданий промышленного назначения. Щебень размером 40-70 мм может использовать для дренажа, добавляться в бетон и бетонные изделия;",
		additionalMaterials: [
			{
				name: "Щебень гранитный фр. 5-20 ",
				price: "От 800 ₽"
			},
			{
				name: "Щебень гранитный фр. 20-40",
				price: "От 600 ₽"
			},
			{
				name: "Щебень гравийный фр. 5-20",
				price: "От 500 ₽"
			},
			{
				name: "Гранитный отсев",
				price: "От 1000 ₽"
			}
		],
		id: 1
	},
	{
		imgUrl: "switchMaterials/recycledMaterials.jpg",
		title: "Вторичные материалы",
		materilInfo: "Асфальтная крошка",
		additionalMaterials: [
			{
				name: "Асфальтная крошка",
				price: "От 500 ₽"
			},
			{
				name: "Бой кирпича",
				price: "От 200 ₽"
			},
			{
				name: "Бой бетона",
				price: "От 200 ₽"
			}
		],
		id: 2
	}
];
const switcherItems: SwitcherItem[] = [
	{
		title: "Песок",
		index: 0
	},
	{
		title: "Щебень",
		index: 1
	},
	{
		title: "Асфальтовая крошка",
		index: 2
	}
];

export const BtnMaterials: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const handleBtnActive = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className={s.container}>
			<div className={s.Switcher}>
				{switcherItems.map((item) => (
					<h4
						key={item.index}
						onClick={() => handleBtnActive(item.index)}
						className={activeIndex === item.index ? s.activeText : ""}>
						{item.title}
					</h4>
				))}
			</div>
			<div className={s.Materials}>
				{cards
					.sort((a, b) => (a.id === activeIndex ? -1 : b.id === activeIndex ? 1 : 0))
					.map((card) => (
						<div key={card.id} className={s.MaterialsCard}>
							<img width={580} height={480} src={card.imgUrl} alt={card.title} />
							<div className={s.MaterialsCardInfo}>
								<h2>{card.title}</h2>
								<p>{card.materilInfo}</p>
								<div className={s.MaterialsCardInfoCost}>
									{card.additionalMaterials.map((material, index) => (
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
