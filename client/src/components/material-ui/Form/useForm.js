import React, { useState } from "react";

const useForm = (defaultFormValue) => {
	const [values, setValues] = useState(defaultFormValue);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return {
		values,
		setValues,
		handleInputChange,
	};
};

export default useForm;
