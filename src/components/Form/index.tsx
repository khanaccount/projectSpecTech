import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./index.module.scss";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Обязательное поле"),
	phone: Yup.string()
		.matches(/^[0-9]+$/, "Телефон должен содержать только цифры")
		.required("Обязательное поле"),
	comments: Yup.string(),
	privacyPolicy: Yup.boolean().oneOf(
		[true],
		"Вы должны согласиться с правилами неразглашения данных"
	)
});

interface FormValues {
	name: string;
	phone: string;
	comments?: string;
	privacyPolicy: boolean;
}

const initialValues: FormValues = {
	name: "",
	phone: "",
	comments: "",
	privacyPolicy: false
};

const Validation: React.FC = () => {
	const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

	const handleSubmit = (
		values: FormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		axios.post("http://localhost:8000", values).then((response) => {
			console.log("Данные отправлены", response.data);
		});
		try {
			console.log(values);
			setIsFormSubmitted(true);
			setSubmitting(false);
		} catch (error) {
			error;
		}
	};

	return (
		<div id="contacts" className={s.FormBg}>
			<div className={s.FormContent}>
				<div className={s.FormText}>
					<h1>Остались вопросы?</h1>
					<h4>Закажите обратный звонок и узнайте больше о наших услугах!</h4>
					<p>Оставьте заявку и наш менеджер перезвонит вам в течение 10 минут</p>
				</div>
				<div className={s.FormValid}>
					<span></span>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{({ isSubmitting }) => (
							<Form>
								<div>
									<ErrorMessage name="name" component="div" />
									<Field placeholder="Имя" className={s.name} type="text" name="name" />
								</div>
								<div>
									<ErrorMessage name="phone" component="div" />
									<Field placeholder="Телефон" className={s.phone} type="text" name="phone" />
								</div>
								<div>
									<Field
										placeholder="Комментарии"
										className={s.comments}
										as="textarea"
										name="comments"
									/>
								</div>
								<div>
									<label>
										<Field className={s.privacyPolicy} type="checkbox" name="privacyPolicy" />
										Соглашение о персональных данных
									</label>
								</div>
								<button
									className={isFormSubmitted ? s.sentButton : s.activeBtn}
									type="submit"
									disabled={isSubmitting || isFormSubmitted}>
									{isFormSubmitted ? "Отправлено" : "Отправить"}
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Validation;
