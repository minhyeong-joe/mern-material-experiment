import React, { useState } from "react";
import {
	AppBar,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { Link, NavLink } from "react-router-dom";

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
						<NavLink
							to="/material-ui/layout"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Layout" />
							</ListItem>
						</NavLink>
						<NavLink
							to="/material-ui/form"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Form" />
							</ListItem>
						</NavLink>
						<NavLink
							to="/material-ui/navigation"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Navigation" />
							</ListItem>
						</NavLink>
						<NavLink
							to="/material-ui/surfaces"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Surfaces" />
							</ListItem>
						</NavLink>
						<NavLink
							to="/material-ui/feedback"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Feedback" />
							</ListItem>
						</NavLink>
						<NavLink
							to="/material-ui/datadisplay"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Data Display" />
							</ListItem>
						</NavLink>
					</List>
					<ListItem>Redux</ListItem>
					<Divider></Divider>
					<List className={classes.innerList}>
						<NavLink
							to="/redux/simple-counter"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Simple Counter" />
							</ListItem>
						</NavLink>
						<NavLink
							to="/redux/redux-thunk"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Redux Thunk" />
							</ListItem>
						</NavLink>

						<NavLink
							to="/redux/redux-form"
							className={classes.link}
							activeClassName="active"
						>
							<ListItem button>
								<ListItemText primary="Redux Form" />
							</ListItem>
						</NavLink>
					</List>
					<ListItem>Socket and Auth</ListItem>
					<Divider></Divider>
					<List className={classes.innerList}>
						<Button variant="contained" color="primary">
							<PersonIcon /> &nbsp; Login using OAuth 2.0
						</Button>
						<ListItem button>
							<ListItemText primary="Simple Chat" />
						</ListItem>
						<ListItem button>
							<ListItemText primary="Gomoku" />
						</ListItem>
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
				<Link to="/" className={classes.link}>
					<Typography variant="h4" className={classes.logo}>
						Mern-Material
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
