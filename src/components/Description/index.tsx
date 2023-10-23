import React from "react";
import s from "./index.module.scss";

type CardsItem = {
	imgUrl: string;
	text: string;
	id: number;
	textGreen: string;
	textLast: string;
};

const cards: CardsItem[] = [
	{
		imgUrl: "/description/01.svg",
		text: "Мы работаем с ",
		textGreen: "2000",
		textLast: " года",
		id: 1
	},
	{
		imgUrl: "/description/02.svg",
		text: "Более ",
		textGreen: "5000",
		textLast: " счастливых клиентов",
		id: 2
	},
	{ imgUrl: "/description/03.svg", text: "Лучшие цены", textGreen: "", textLast: "", id: 3 },
	{
		imgUrl: "/description/04.svg",
		text: "Качественная продукция",
		textGreen: "",
		textLast: "",
		id: 4
	},
	{ imgUrl: "/description/05.svg", text: "Оперативность", textGreen: "", textLast: "", id: 5 }
];

const Description: React.FC = () => {
	return (
		<div className={s.Description}>
			<h1>Почему выбирают нас</h1>
			<div className={s.cards}>
				{cards.map((card) => (
					<div key={card.id} className={s.card}>
						<img src={card.imgUrl} alt="descImg" />
						<p>
							{card.text}
							<span>{card.textGreen}</span>
							{card.textLast}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Description;
