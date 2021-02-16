import React, { useState } from "react";

const useForm = (defaultFormValue) => {
	const [values, setValues] = useState(defaultFormValue);
	const handleInputChange = (e) => {
		console.log(e.target.name);
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
