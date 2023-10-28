import React from "react";
import { YMaps, Map, Circle } from "@pbe/react-yandex-maps";
import s from "./index.module.scss";

interface StarsText {
	img: string;
	id: number;
	text: string;
}

interface Address {
	id: number;
	text: string;
	title: string;
}

const starsText: StarsText[] = [
	{
		id: 1,
		img: "delivery/star.svg",
		text: "Вы оставляете заявку через сайт или по телефону."
	},
	{
		id: 2,
		img: "delivery/star.svg",
		text: "Мы производим точный расчет стоимости"
	},
	{
		id: 3,
		img: "delivery/star.svg",
		text: "Осуществляем поставку заказанного вами материала точно в срок"
	},
	{
		id: 4,
		img: "delivery/star.svg",
		text: "Соблюдаем своевременный документооборот"
	}
];

const address: Address[] = [
	{
		id: 1,
		title: "г. Санкт-Петербург,",
		text: "Невский проспект, д. 12/2"
	},
	{
		id: 2,
		title: "+7 812 545 44 53",
		text: "Ежедневно с 08:00 до 24:00"
	}
];

const Delivery: React.FC = () => {
	const [deliveryAreaVisible, setDeliveryAreaVisible] = React.useState(false);

	const handleAreaVisible = () => {
		setDeliveryAreaVisible(!deliveryAreaVisible);
	};

	return (
		<div id="delivery" className={s.Delivery}>
			<div className={s.DeliveryInfo}>
				<h1>Доставка </h1>
				<p>
					Основная миссия компании Спец-транс — комплексные поставки нерудных материалов для
					корпоративных клиентов и частных лиц. Мы осуществлем доставку по Санкт-Петербургу и
					Ленинградской области.
				</p>
				{starsText.map((info) => (
					<div className={s.starText} key={info.id}>
						<img width={24} height={24} src={info.img} alt="star" />
						<p>{info.text}</p>
					</div>
				))}
				<div className={s.Address}>
					{address.map((info) => (
						<div key={info.id} className={s.AddressBox}>
							<h4>{info.title}</h4>
							<p>{info.text}</p>
						</div>
					))}
				</div>
			</div>
			<div className={s.DeliveryMap}>
				<button
					className={`${s.deliveryBtn} ${deliveryAreaVisible && s.deliveryBtnActive}`}
					onClick={handleAreaVisible}>
					Зона доставки
				</button>

				<YMaps>
					<div>
						<Map
							width={950}
							height={980}
							defaultState={{
								center: [59.936864, 30.315778],
								zoom: 8,
								controls: ["zoomControl", "fullscreenControl"]
							}}
							modules={["control.ZoomControl", "control.FullscreenControl"]}>
							{deliveryAreaVisible && (
								<Circle
									geometry={[[59.936864, 30.315778], 100000]}
									options={{
										draggable: false,
										fillColor: "#DB709377",
										strokeColor: "#990066",
										strokeOpacity: 0.8,
										strokeWidth: 5
									}}
								/>
							)}
						</Map>
					</div>
				</YMaps>
			</div>
		</div>
	);
};

export default Delivery;
