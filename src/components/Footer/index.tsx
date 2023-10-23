import React from "react";
import s from "./index.module.scss";

const Footer: React.FC = () => {
	return (
		<div className={s.Footer}>
			<div className={s.politic}>
				<img src="footer/logoWhite.svg" alt="logo" />
				<p>Политика конфиденциальности © спец-транс, 2023</p>
			</div>
			<div className={s.links}>
				<a href="/materials">Материалы</a>
				<a href="/services">Услуги</a>
			</div>
			<div className={s.logoLinks}>
				<a href="https://vk.com">
					<img src="footer/vk.svg" alt="vk" />
				</a>
				<a href="https://ru-ru.facebook.com">
					<img src="footer/fb.svg" alt="fb" />
				</a>
				<a href="https://www.whatsapp.com">
					<img src="footer/wt.svg" alt="wt" />
				</a>
				<h3>+7 928 245 15 20</h3>
			</div>
		</div>
	);
};

export default Footer;
