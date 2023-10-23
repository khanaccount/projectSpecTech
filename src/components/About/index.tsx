import React from "react";
import s from "./index.module.scss";

const About: React.FC = () => {
	return (
		<div id="about" className={s.About}>
			<div className={s.AboutLeft}>
				<h1>О компании СПЕЦ-ТРАНС</h1>
				<p>
					Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг как
					надежного и ответственного партнера. В число наших клиентов вошли крупнейшие организации.
					При этом стоит отметить, что на индивидуальный подход при заказе наших услуг могут
					рассчитывать как крупные компании, так и частные лица.
				</p>
			</div>
			<div className={s.AboutRight}>
				<div>
					<div className={s.leftNumber}>
						<h1>60</h1>
						<span>+</span>
					</div>
					<p>Единиц техники</p>
				</div>
				<div>
					<h1>15</h1>
					<p>Карьеров</p>
				</div>
			</div>
		</div>
	);
};

export default About;
