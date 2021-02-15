import React, { useState } from "react";
import {
	Container,
	FormGroup,
	Grid,
	Paper,
	TextField,
	Typography,
	InputAdornment,
	IconButton,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	FormControlLabel,
	Switch,
	RadioGroup,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
	KeyboardDatePicker,
	KeyboardTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import useStyles from "./style";

const DEFAULT_FORM_VALUE = {
	firstName: "",
	lastName: "",
	password: "",
	date: new Date(),
	time: new Date(),
	comment: "",
	state: null,
	isHuman: true,
	check1: false,
	check2: false,
	check3: false,
	gender: "male",
	left: [],
	right: [],
};

const Form = () => {
	const classes = useStyles();
	const [entry, setEntry] = useState(DEFAULT_FORM_VALUE);
	const [showPassword, setShowPassword] = useState(false);

	const onShowPasswordClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
			<Container>
				<Paper>
					<Grid container spacing={2} wrap="nowrap">
						<Grid item xs={12} md={8}>
							<Typography variant="h2">Form</Typography>
							<form>
								<FormGroup row>
									<TextField
										type="text"
										variant="outlined"
										label="First Name"
										value={entry.firstName}
										onChange={(e) => {
											setEntry({ ...entry, firstName: e.target.value });
										}}
									/>
									<TextField
										type="text"
										variant="outlined"
										label="Last Name"
										value={entry.lastName}
										onChange={(e) => {
											setEntry({ ...entry, lastName: e.target.value });
										}}
									/>
								</FormGroup>
								<TextField
									type={showPassword ? "text" : "password"}
									variant="outlined"
									label="Password"
									InputProps={{
										endAdornment: (
											<InputAdornment>
												<IconButton onClick={onShowPasswordClick}>
													{showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
											</InputAdornment>
										),
									}}
									value={entry.password}
									onChange={(e) => {
										setEntry({ ...entry, password: e.target.value });
									}}
								/>
								<FormGroup row>
									<KeyboardDatePicker
										variant="normal"
										format="MM/dd/yyyy"
										label="Date"
										value={entry.date}
										onChange={(newDate) => {
											setEntry({ ...entry, date: newDate });
										}}
									/>
									<KeyboardTimePicker
										variant="normal"
										label="Time"
										value={entry.time}
										onChange={(newTime) => {
											setEntry({ ...entry, time: newTime });
										}}
									/>
								</FormGroup>
								<TextField
									multiline
									label="comment"
									value={entry.comment}
									onChange={(e) => {
										setEntry({ ...entry, comment: e.target.value });
									}}
									rows={3}
									variant="outlined"
									fullWidth
								/>
								<FormControl style={{ minWidth: "100px" }}>
									<InputLabel>State</InputLabel>
									<Select
										value={entry.state}
										onChange={(e) =>
											setEntry({ ...entry, state: e.target.value })
										}
									>
										<MenuItem value="az">AZ</MenuItem>
										<MenuItem value="ca">CA</MenuItem>
										<MenuItem value="nc">NC</MenuItem>
										<MenuItem value="tx">TX</MenuItem>
									</Select>
								</FormControl>
								<FormGroup style={{ textAlign: "left" }}>
									<FormControlLabel
										label="Are you a human?"
										labelPlacement="start"
										control={
											<Switch
												checked={entry.isHuman}
												onChange={(e) => {
													setEntry({ ...entry, isHuman: e.target.checked });
												}}
											/>
										}
									/>
								</FormGroup>
							</form>
						</Grid>
						<Grid item xs={12} md={4}>
							<code>{JSON.stringify(entry, null, 1)}</code>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</MuiPickersUtilsProvider>
	);
};

export default Form;
