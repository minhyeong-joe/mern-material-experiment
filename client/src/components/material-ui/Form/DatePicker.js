import React from "react";
import {
	KeyboardDatePicker,
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

const DatePicker = ({ label, name, value, onChange }) => {
	const styles = useStyles();

	const convertEventParam = (name, value) => ({
		target: {
			name,
			value,
		},
	});

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				variant="normal"
				inputVariant="outlined"
				label={label}
				format="MM/dd/yyyy"
				name={name}
				value={value}
				onChange={(date) => onChange(convertEventParam(name, date))}
				className={styles.picker}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
