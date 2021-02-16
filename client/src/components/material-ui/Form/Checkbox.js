import React from "react";
import {
	FormControl,
	FormControlLabel,
	Checkbox as MUICheckbox,
	FormLabel,
} from "@material-ui/core";

const Checkbox = ({ label, checked, onChange, name }) => {
	const convertEventParam = (name, value) => ({
		target: {
			name,
			value,
		},
	});

	return (
		<FormControl>
			<FormControlLabel
				control={
					<MUICheckbox
						checked={checked}
						onChange={(e) =>
							onChange(convertEventParam(name, e.target.checked))
						}
						color="primary"
						name={name}
					/>
				}
				label={label}
			/>
		</FormControl>
	);
};

export default Checkbox;
