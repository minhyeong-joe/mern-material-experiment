import React, { useState } from "react";
import {
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
} from "@material-ui/core";

import useStyles from "./style";

const Layout = () => {
	const classes = useStyles();
	const [direction, setDirection] = useState("row");
	const [justify, setJustify] = useState("center");
	const [alignItems, setAlignItems] = useState("center");
	const [spacing, setSpacing] = useState(0);

	return (
		<div>
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
		</div>
	);
};

export default Layout;
