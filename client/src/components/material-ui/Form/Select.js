import React from "react";
import {
	FormControl,
	FormLabel,
	MenuItem,
	Select as MUISelect,
} from "@material-ui/core";

const Select = ({ defaultValue, options, label, minWidth, onChange }) => {
	return (
		<FormControl style={{ minWidth: minWidth }}>
			<FormLabel>{label}</FormLabel>
			<MUISelect value={defaultValue} onChange={onChange}>
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
