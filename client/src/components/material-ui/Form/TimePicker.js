import React from "react";
import {
	KeyboardTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	picker: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const TimePicker = ({ label, name, value, onChange }) => {
	const styles = useStyles();

	const convertEventParam = (name, value) => ({
		target: {
			name,
			value,
		},
	});

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardTimePicker
				variant="normal"
				inputVariant="outlined"
				label={label}
				name={name}
				value={value}
				onChange={(time) => onChange(convertEventParam(name, time))}
				className={styles.picker}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default TimePicker;
