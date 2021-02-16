import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(3),
	},
	codeblock: {
		padding: "10px",
		backgroundColor: "#1b1b1b",
		display: "block",
		color: "#b1b1b1",
		fontSize: "16px",
	},
	btn: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},
}));
