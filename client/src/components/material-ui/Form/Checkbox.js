import React from "react";
import {
	FormControl,
	FormControlLabel,
	Checkbox as MUICheckbox,
	FormLabel,
} from "@material-ui/core";

const Checkbox = ({ label, checked, onChange }) => {
	return (
		<FormControl>
			<FormControlLabel
				control={
					<MUICheckbox checked={checked} onChange={onChange} color="primary" />
				}
				label={label}
			/>
		</FormControl>
	);
};

export default Checkbox;
