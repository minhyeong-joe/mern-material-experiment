import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	textarea: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const Textarea = ({ label, value, onChange, rows }) => {
	const styles = useStyles();
	return (
		<TextField
			multiline
			label={label}
			value={value}
			onChange={onChange}
			rows={rows}
			variant="outlined"
			fullWidth
			className={styles.textarea}
		/>
	);
};

export default Textarea;
