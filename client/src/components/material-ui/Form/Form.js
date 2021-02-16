import React, { useState } from "react";
import {
	Container,
	FormGroup,
	Grid,
	Paper,
	Typography,
	InputAdornment,
	IconButton,
	FormLabel,
	Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
	KeyboardDatePicker,
	KeyboardTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Select from "./Select";
import useStyles from "./style";
import Textarea from "./Textarea";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Switch from "./Switch";
import Radiobox from "./Radiobox";
import Slider from "./Slider";

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
	age: 20,
};

const selectOptions = [
	{ value: "az", label: "AZ" },
	{ value: "ca", label: "CA" },
	{ value: "tx", label: "TX" },
];

const radioOptions = [
	{ value: "male", label: "Male" },
	{ value: "female", label: "Female" },
];

const Form = () => {
	const classes = useStyles();
	const [entry, setEntry] = useState(DEFAULT_FORM_VALUE);
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onShowPasswordClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
			<Container>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={8}>
							<Typography variant="h2">Form</Typography>
							<form>
								<FormGroup row>
									<Grid container spacing={2}>
										<Grid item xs>
											<TextInput
												type="text"
												label="First Name"
												value={entry.firstName}
												onChange={(e) => {
													setEntry({ ...entry, firstName: e.target.value });
												}}
											/>
										</Grid>
										<Grid item xs>
											<TextInput
												type="text"
												label="Last Name"
												value={entry.lastName}
												onChange={(e) => {
													setEntry({ ...entry, lastName: e.target.value });
												}}
											/>
										</Grid>
									</Grid>
								</FormGroup>
								<TextInput
									type={showPassword ? "text" : "password"}
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
										style={{ marginLeft: "16px" }}
									/>
								</FormGroup>
								<Textarea
									label="comment"
									value={entry.comment}
									onChange={(e) => {
										setEntry({ ...entry, comment: e.target.value });
									}}
									rows={3}
								/>
								<Select
									options={selectOptions}
									label="State"
									minWidth={150}
									onChange={(e) => {
										setEntry({ ...entry, state: e.target.value });
									}}
									value={entry.state}
								/>
								<FormGroup>
									<Switch
										checked={entry.isHuman}
										onChange={(e) => {
											setEntry({ ...entry, isHuman: e.target.checked });
										}}
										labelPlacement="start"
										label="Are you a human?"
									/>
								</FormGroup>
								<FormLabel>Checkbox</FormLabel>
								<FormGroup row>
									<Checkbox
										label="check1"
										checked={entry.check1}
										onChange={(e) => {
											setEntry({ ...entry, check1: e.target.checked });
										}}
									/>
									<Checkbox
										label="check2"
										checked={entry.check2}
										onChange={(e) => {
											setEntry({ ...entry, check2: e.target.checked });
										}}
									/>
									<Checkbox
										label="check3"
										checked={entry.check3}
										onChange={(e) => {
											setEntry({ ...entry, check3: e.target.checked });
										}}
									/>
								</FormGroup>
								<Radiobox
									label="Gender"
									labelPlacement="end"
									options={radioOptions}
									onChange={(e) => {
										setEntry({ ...entry, gender: e.target.value });
									}}
									value={entry.gender}
									row
								/>
								<Slider
									label="Age"
									value={entry.age}
									onChange={(e, newVal) => {
										setEntry({ ...entry, age: newVal });
									}}
									marks
									min={0}
									max={80}
								/>
								<Grid container justify="center" spacing={1}>
									<Grid item xs={6} md={4}>
										<Button
											variant="contained"
											color="primary"
											className={classes.btn}
											onClick={() => {
												setIsSubmitting(true);
												const submittedEntry = Object(entry);
												setTimeout(() => {
													// simiulated delay
													alert(
														`Form Submitted:\n${JSON.stringify(
															submittedEntry,
															"\t",
															1
														)}`
													);
													setEntry(DEFAULT_FORM_VALUE);
													setIsSubmitting(false);
												}, 1500);
											}}
											disabled={isSubmitting}
										>
											Submit
										</Button>
									</Grid>
									<Grid item xs={6} md={4}>
										<Button
											variant="outlined"
											color="secondary"
											className={classes.btn}
											onClick={() => {
												setEntry(DEFAULT_FORM_VALUE);
											}}
											disabled={isSubmitting}
										>
											Reset
										</Button>
									</Grid>
								</Grid>
							</form>
						</Grid>
						<Grid item xs={12} md={4}>
							<pre className={classes.codeblock}>
								{JSON.stringify(entry, "\t", 1)}
							</pre>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</MuiPickersUtilsProvider>
	);
};

export default Form;
