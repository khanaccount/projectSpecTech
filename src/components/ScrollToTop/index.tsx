import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import s from "./index.module.scss";

const ScrollButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Обработчик события прокрутки страницы
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const halfPageHeight = window.innerHeight;

			// Если пользователь прокрутил половину страницы, показать кнопку
			setIsVisible(scrollY > halfPageHeight);
		};

		// Добавляем обработчик события прокрутки страницы при монтировании компонента
		window.addEventListener("scroll", handleScroll);

		// Убираем обработчик при размонтировании компонента
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return isVisible ? (
		<Link className={s.scrollButton} to="top" smooth={true} duration={500}>
			Наверх
		</Link>
	) : null;
};

export default ScrollButton;
