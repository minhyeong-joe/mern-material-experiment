import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	menuIcon: {
		color: "white",
	},
	logo: {
		textTransform: "uppercase",
		flexGrow: 1,
	},
	sideMenu: {
		padding: theme.spacing(2),
		width: "300px",
	},
	innerList: {
		paddingLeft: theme.spacing(3),
	},
}));
