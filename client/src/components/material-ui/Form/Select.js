import React from "react";
import {
	FormControl,
	FormLabel,
	MenuItem,
	Select as MUISelect,
} from "@material-ui/core";

const Select = ({ value, options, label, onChange, name }) => {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<MUISelect value={value || ""} onChange={onChange} name={name}>
				{options.map((option) => {
					return (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					);
				})}
			</MUISelect>
		</FormControl>
	);
};

export default Select;
