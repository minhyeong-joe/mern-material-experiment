import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	input: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const TextInput = ({ type, label, value, onChange, InputProps }) => {
	const styles = useStyles();
	return (
		<TextField
			type={type}
			label={label}
			value={value}
			onChange={onChange}
			variant="outlined"
			fullWidth
			className={styles.input}
			InputProps={InputProps}
		/>
	);
};

export default TextInput;
