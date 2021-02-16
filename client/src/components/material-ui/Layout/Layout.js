import React, { useState } from "react";
import {
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	GridList,
	GridListTile,
	GridListTileBar,
	Paper,
	Radio,
	RadioGroup,
	Typography,
	IconButton,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import useStyles from "./style";

const Layout = () => {
	const classes = useStyles();
	const [direction, setDirection] = useState("row");
	const [justify, setJustify] = useState("center");
	const [alignItems, setAlignItems] = useState("center");
	const [spacing, setSpacing] = useState(0);

	return (
		<div className={classes.root}>
			<Container className={classes.Container} maxWidth="md">
				<Grid className={classes.row} container spacing={3}>
					<Grid className={classes.col} item xs={12}>
						<Paper className={classes.paper}>Full-width content</Paper>
					</Grid>
				</Grid>
				<Grid className={classes.row} container spacing={3}>
					<Grid className={classes.col} item xs={6}>
						<Paper className={classes.paper}>Half-width content</Paper>
					</Grid>
					<Grid className={classes.col} item xs={6}>
						<Paper className={classes.paper}>Half-width content</Paper>
					</Grid>
				</Grid>
				<Grid
					className={classes.row}
					container
					spacing={3}
					justify="center"
					alignItems="center"
				>
					<Grid className={classes.col} item xs={12} sm={6} lg={3}>
						<Paper className={classes.paper}>xs=12, sm=6, lg=3</Paper>
					</Grid>
					<Grid className={classes.col} item xs={12} sm={6} lg={3}>
						<Paper className={classes.paper}>xs=12, sm=6, lg=3</Paper>
					</Grid>
					<Grid className={classes.col} item xs={12} sm={6} lg={3}>
						<Paper className={classes.paper}>xs=12, sm=6, lg=3</Paper>
					</Grid>
					<Grid className={classes.col} item xs={12} sm={6} lg={3}>
						<Paper className={classes.paper}>xs=12, sm=6, lg=3</Paper>
					</Grid>
					<Grid className={classes.col} item xs={12} sm={6} lg={3}>
						<Paper className={classes.paper}>xs=12, sm=6, lg=3</Paper>
					</Grid>
					<Grid className={classes.col} item xs={12} sm={6} lg={3}>
						<Paper className={classes.paper}>xs=12, sm=6, lg=3</Paper>
					</Grid>
				</Grid>
			</Container>

			<Container className={classes.Container} maxWidth="md">
				<Grid container className={classes.row} spacing={2}>
					<Grid item xs={12}>
						<Grid
							container
							direction={direction}
							justify={justify}
							alignItems={alignItems}
							spacing={spacing}
						>
							<Grid item>
								<Paper className={classes.paperOne}>1</Paper>
							</Grid>
							<Grid item>
								<Paper className={classes.paperTwo}>2</Paper>
							</Grid>
							<Grid item>
								<Paper className={classes.paperThree}>3</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item>
						<FormControl>
							<FormLabel>direction:</FormLabel>
							<RadioGroup
								name="direction"
								defaultValue={direction}
								value={direction}
								onChange={(e) => {
									setDirection(e.target.value);
								}}
								row
							>
								<FormControlLabel value="row" control={<Radio />} label="row" />
								<FormControlLabel
									value="row-reverse"
									control={<Radio />}
									label="row-reverse"
								/>
								<FormControlLabel
									value="column"
									control={<Radio />}
									label="column"
								/>
								<FormControlLabel
									value="column-reverse"
									control={<Radio />}
									label="column-reverse"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl>
							<FormLabel>justify:</FormLabel>
							<RadioGroup
								name="justify"
								defaultValue={justify}
								value={justify}
								onChange={(e) => {
									setJustify(e.target.value);
								}}
								row
							>
								<FormControlLabel
									value="flex-start"
									control={<Radio />}
									label="flex-start"
								/>
								<FormControlLabel
									value="center"
									control={<Radio />}
									label="center"
								/>
								<FormControlLabel
									value="flex-end"
									control={<Radio />}
									label="flex-end"
								/>
								<FormControlLabel
									value="space-between"
									control={<Radio />}
									label="space-between"
								/>
								<FormControlLabel
									value="space-around"
									control={<Radio />}
									label="space-around"
								/>
								<FormControlLabel
									value="space-evenly"
									control={<Radio />}
									label="space-evenly"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl>
							<FormLabel>alignItems:</FormLabel>
							<RadioGroup
								name="alignItems"
								defaultValue={alignItems}
								value={alignItems}
								onChange={(e) => {
									setAlignItems(e.target.value);
								}}
								row
							>
								<FormControlLabel
									value="flex-start"
									control={<Radio />}
									label="flex-start"
								/>
								<FormControlLabel
									value="center"
									control={<Radio />}
									label="center"
								/>
								<FormControlLabel
									value="flex-end"
									control={<Radio />}
									label="flex-end"
								/>
								<FormControlLabel
									value="stretch"
									control={<Radio />}
									label="stretch"
								/>
								<FormControlLabel
									value="baseline"
									control={<Radio />}
									label="baseline"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl>
							<FormLabel>spacing:</FormLabel>
							<RadioGroup
								name="spacing"
								defaultValue={spacing.toString()}
								value={spacing.toString()}
								onChange={(e) => {
									setSpacing(parseInt(e.target.value));
								}}
								row
							>
								<FormControlLabel value="0" control={<Radio />} label="0" />
								<FormControlLabel value="1" control={<Radio />} label="1" />
								<FormControlLabel value="2" control={<Radio />} label="2" />
								<FormControlLabel value="3" control={<Radio />} label="3" />
								<FormControlLabel value="4" control={<Radio />} label="4" />
								<FormControlLabel value="5" control={<Radio />} label="5" />
								<FormControlLabel value="6" control={<Radio />} label="6" />
								<FormControlLabel value="7" control={<Radio />} label="7" />
								<FormControlLabel value="8" control={<Radio />} label="8" />
								<FormControlLabel value="9" control={<Radio />} label="9" />
								<FormControlLabel value="10" control={<Radio />} label="10" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Container>

			<Container maxWidth="md" className={classes.Container}>
				<Paper className={classes.complexGridCard}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<img
								src="https://via.placeholder.com/150"
								alt="placeholder"
								style={{ height: "100%", width: "100%" }}
							/>
						</Grid>
						<Grid item container xs={12} sm={9} direction="column">
							<Grid item container>
								<Grid item xs={8}>
									<Typography variant="subtitle1" gutterBottom>
										Standard license
									</Typography>
								</Grid>
								<Grid item xs={4} style={{ textAlign: "right" }}>
									<Typography variant="subtitle1">$19.00</Typography>
								</Grid>
							</Grid>
							<Grid item xs>
								<Typography variant="body2" gutterBottom>
									Full resolution 1920x1080 • JPEG
								</Typography>
								<Typography variant="body2" gutterBottom color="textSecondary">
									ID: 1030114
								</Typography>
							</Grid>
							<Grid item xs>
								<Typography
									variant="body2"
									style={{
										marginTop: "16px",
										cursor: "pointer",
										display: "inline-block",
									}}
								>
									Remove
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Container>

			<Container
				maxWidth="md"
				style={{
					backgroundColor: "gray",
					padding: "20px",
					marginBottom: "32px",
				}}
			>
				<GridList cellHeight={128} cols={4} spacing={0}>
					<GridListTile cols={2} rows={2}>
						<img
							src="https://images.unsplash.com/photo-1612485222394-376d81a3e829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt="random"
							className={classes.image}
						/>
						<GridListTileBar
							title="Tile Bar 1"
							subtitle="subtitle"
							actionIcon={
								<IconButton>
									<InfoIcon style={{ color: "white" }} />
								</IconButton>
							}
						/>
					</GridListTile>
					<GridListTile rows={2}>
						<img
							src="https://images.unsplash.com/photo-1611146227868-30ebc19bda39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt="random"
						/>
						<GridListTileBar
							title="Tile Bar 2"
							subtitle="titlePosition: 'top'"
							titlePosition="top"
							actionIcon={
								<IconButton>
									<InfoIcon style={{ color: "white" }} />
								</IconButton>
							}
						/>
					</GridListTile>
					<GridListTile rows={2}>
						<img
							src="https://images.unsplash.com/photo-1612256360672-085b80f3ce88?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt="random"
						/>
						<GridListTileBar
							title="Tile Bar 3"
							subtitle="actionPosition: 'left'"
							actionPosition="left"
							actionIcon={
								<IconButton>
									<InfoIcon style={{ color: "white" }} />
								</IconButton>
							}
						/>
					</GridListTile>
					<GridListTile rows={2}>
						<img
							src="https://images.unsplash.com/photo-1612665139153-68682e0f741d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt="random"
						/>
						<GridListTileBar
							title={
								<Typography variant="h5" style={{ color: "gold" }}>
									Tile Bar 4
								</Typography>
							}
							subtitle="fancy title"
							actionIcon={
								<IconButton>
									<InfoIcon style={{ color: "white" }} />
								</IconButton>
							}
						/>
					</GridListTile>
					<GridListTile rows={2}>
						<img
							src="https://images.unsplash.com/photo-1612251248897-e3afc34c6920?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt="random"
						/>
					</GridListTile>
					<GridListTile cols={2} rows={2}>
						<img src="https://source.unsplash.com/random" alt="random" />
					</GridListTile>
				</GridList>
			</Container>
		</div>
	);
};

export default Layout;
