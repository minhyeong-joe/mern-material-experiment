import React, { useState } from "react";
import {
	AppBar,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	Toolbar,
	Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";

import useStyles from "./style";

const Header = () => {
	const classes = useStyles();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = (open) => (e) => {
		if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
		setIsDrawerOpen(open);
	};

	const renderMenus = () => {
		return (
			<div
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}
				className={classes.sideMenu}
			>
				<List>
					<ListItem>Material UI</ListItem>
					<Divider></Divider>
					<List className={classes.innerList}>
						<ListItem button>Layout</ListItem>
						<ListItem button>Form</ListItem>
						<ListItem button>Navigation</ListItem>
						<ListItem button>Surfaces</ListItem>
						<ListItem button>Feedback</ListItem>
						<ListItem button>Data Display</ListItem>
					</List>
					<ListItem>Redux</ListItem>
					<Divider></Divider>
					<List className={classes.innerList}>
						<ListItem button>Simple Counter</ListItem>
						<ListItem button>Redux Thunk</ListItem>
						<ListItem button>Redux Form</ListItem>
					</List>
					<ListItem>Socket and Auth</ListItem>
					<Divider></Divider>
					<List className={classes.innerList}>
						<Button variant="contained" color="primary">
							<PersonIcon /> &nbsp; Login using OAuth 2.0
						</Button>
						<ListItem button>Simple Chat</ListItem>
						<ListItem button>Gomoku</ListItem>
					</List>
				</List>
			</div>
		);
	};

	return (
		<AppBar color="primary" position="sticky">
			<Toolbar>
				<Button onClick={toggleDrawer(true)}>
					<MenuIcon className={classes.menuIcon} />
				</Button>
				<Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
					{renderMenus()}
				</Drawer>
				<Typography variant="h4" className={classes.logo}>
					Mern-Material
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
