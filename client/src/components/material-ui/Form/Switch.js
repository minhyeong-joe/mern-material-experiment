import React from "react";
import {
	FormControl,
	FormControlLabel,
	makeStyles,
	Switch as MUISwitch,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		alignItems: "flex-start",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const Switch = ({ label, checked, onChange, labelPlacement, name }) => {
	const styles = useStyles();
	const convertEventParam = (name, value) => ({
		target: {
			name,
			value,
		},
	});
	return (
		<FormControl className={styles.container}>
			<FormControlLabel
				label={label}
				control={
					<MUISwitch
						checked={checked}
						onChange={(e) =>
							onChange(convertEventParam(name, e.target.checked))
						}
					/>
				}
				labelPlacement={labelPlacement}
			/>
		</FormControl>
	);
};

export default Switch;
