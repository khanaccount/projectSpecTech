import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import s from "./index.module.scss";

const HeaderTop: React.FC = () => {
	const location = useLocation();
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(true);

	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	return (
		<div id="top" className={s.HeaderTop}>
			<div className={s.HeaderTopNav}>
				<Link className={s.logoLink} to="/">
					<img width={209} src="logo.svg" alt="logo" />
				</Link>
				<div className={s.BurgerMenuIcon} onClick={toggleBurgerMenu}>
					{isBurgerMenuOpen == false ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
				<ul>
					<li>
						<Link to="/services" className={location.pathname === "/services" ? s.active : ""}>
							Услуги
						</Link>
					</li>
					<li>
						<Link to="/materials" className={location.pathname === "/materials" ? s.active : ""}>
							Материалы
						</Link>
					</li>
					<li>
						<ScrollLink to="delivery" offset={0} smooth={true} duration={500} spy={true}>
							Доставка и оплата
						</ScrollLink>
					</li>
					<li>
						<ScrollLink to="about" offset={-250} smooth={true} duration={500} spy={true}>
							О компании
						</ScrollLink>
					</li>
					<li>
						<ScrollLink to="contacts" offset={-250} smooth={true} duration={500} spy={true}>
							Контакты
						</ScrollLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderTop;
