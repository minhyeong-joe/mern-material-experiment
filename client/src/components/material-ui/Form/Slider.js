import React from "react";
import { Typography, Slider as MUISlider, FormGroup } from "@material-ui/core";

const Slider = ({ label, value, onChange, step, marks, min, max }) => {
	return (
		<FormGroup>
			<Typography variant="body2">{label}</Typography>
			<MUISlider
				value={value}
				onChange={onChange}
				step={step}
				marks={marks}
				min={min}
				max={max}
				valueLabelDisplay="auto"
			/>
		</FormGroup>
	);
};

export default Slider;
