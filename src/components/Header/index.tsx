import React from "react";
import { Link } from "react-scroll";

import s from "./index.module.scss";

const Header: React.FC = () => {
	return (
		<div className={s.headerContent}>
			<h1>Продажа и доставка нерудных материалов</h1>
			<p>
				У нас вы можете заказать материалы премиального качества. Индивидуальный подход и
				качественная продукция – ключевые преимущества <br /> нашей компании.
			</p>
			<Link to="contacts" offset={-250} smooth={true} duration={500} spy={true}>
				<button>Заказать звонок</button>
			</Link>
		</div>
	);
};

export default Header;
