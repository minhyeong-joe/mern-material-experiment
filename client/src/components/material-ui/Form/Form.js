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

import Select from "./Select";
import useStyles from "./style";
import Textarea from "./Textarea";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Switch from "./Switch";
import Radiobox from "./Radiobox";
import useForm from "./useForm";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

const DEFAULT_FORM_VALUE = {
	firstName: "",
	lastName: "",
	password: "",
	date: new Date(),
	time: new Date(),
	comment: "",
	state: "",
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
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { values, setValues, handleInputChange } = useForm(DEFAULT_FORM_VALUE);

	const onShowPasswordClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container className={classes.root}>
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
											name="firstName"
											value={values.firstName}
											onChange={handleInputChange}
										/>
									</Grid>
									<Grid item xs>
										<TextInput
											type="text"
											label="Last Name"
											name="lastName"
											value={values.lastName}
											onChange={handleInputChange}
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
								name="password"
								value={values.password}
								onChange={handleInputChange}
							/>
							<FormGroup row>
								<DatePicker
									label="Date"
									name="date"
									value={values.date}
									onChange={handleInputChange}
								/>
								<TimePicker
									label="Time"
									name="time"
									value={values.time}
									onChange={handleInputChange}
								/>
							</FormGroup>
							<Textarea
								label="comment"
								name="comment"
								value={values.comment}
								onChange={handleInputChange}
								rows={3}
							/>
							<FormGroup>
								<Select
									options={selectOptions}
									label="State"
									onChange={handleInputChange}
									name="state"
									value={values.state}
								/>
							</FormGroup>
							<FormGroup>
								<Switch
									name="isHuman"
									checked={values.isHuman}
									onChange={handleInputChange}
									labelPlacement="start"
									label="Are you a human?"
								/>
							</FormGroup>
							<FormLabel>Checkbox</FormLabel>
							<FormGroup row>
								<Checkbox
									label="check1"
									name="check1"
									checked={values.check1}
									onChange={handleInputChange}
								/>
								<Checkbox
									label="check2"
									name="check2"
									checked={values.check2}
									onChange={handleInputChange}
								/>
								<Checkbox
									label="check3"
									name="check3"
									checked={values.check3}
									onChange={handleInputChange}
								/>
							</FormGroup>
							<Radiobox
								label="Gender"
								labelPlacement="end"
								options={radioOptions}
								onChange={handleInputChange}
								name="gender"
								value={values.gender}
								row
							/>
							{/* <Slider
									label="Age"
									value={values.age}
									onChange={(e, newVal) => {
										setvalues({ ...values, age: newVal });
									}}
									marks
									min={0}
									max={80}
								/> */}
							<Grid container justify="center" spacing={1}>
								<Grid item xs={6} md={4}>
									<Button
										variant="contained"
										color="primary"
										className={classes.btn}
										onClick={() => {
											setIsSubmitting(true);
											const submittedvalues = Object(values);
											setTimeout(() => {
												// simiulated delay
												alert(
													`Form Submitted:\n${JSON.stringify(
														submittedvalues,
														"\t",
														1
													)}`
												);
												setValues(DEFAULT_FORM_VALUE);
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
											setValues(DEFAULT_FORM_VALUE);
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
							{JSON.stringify(values, "\t", 1)}
						</pre>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Form;
