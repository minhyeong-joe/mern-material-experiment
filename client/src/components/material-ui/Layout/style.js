import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	Container: {
		backgroundColor: "lightblue",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
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
	complexGridCard: {
		maxWidth: "500px",
		marginLeft: "auto",
		marginRight: "auto",
		padding: theme.spacing(2),
	},
}));
