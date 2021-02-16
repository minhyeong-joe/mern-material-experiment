import React from "react";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@material-ui/core";

const Radiobox = ({
	label,
	options,
	onChange,
	labelPlacement,
	value,
	row,
	name,
}) => {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<RadioGroup value={value} onChange={onChange} row={row} name={name}>
				{options.map((option) => (
					<FormControlLabel
						key={option.value}
						label={option.label}
						value={option.value}
						labelPlacement={labelPlacement}
						control={<Radio />}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export default Radiobox;
