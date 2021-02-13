import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	Container: {
		backgroundColor: "lightblue",
		marginTop: "20px",
		padding: "20px",
	},
	row: {
		backgroundColor: "lightcoral",
	},
	col: {
		backgroundColor: "cyan",
	},
	paper: {
		padding: theme.spacing(2),
	},
	paperOne: {
		height: "100px",
		width: "100px",
		backgroundColor: "blue",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	paperTwo: {
		height: "120px",
		width: "50px",
		backgroundColor: "red",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	paperThree: {
		height: "80px",
		width: "120px",
		backgroundColor: "green",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));
