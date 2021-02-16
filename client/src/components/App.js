import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import history from "../history";
import Home from "./Home";
import Layout from "./material-ui/Layout/Layout";
import Form from "./material-ui/Form/Form";
import Navigation from "./material-ui/Navigation/Navigation";
import Surfaces from "./material-ui/Surfaces/Surfaces";
import Feedback from "./material-ui/Feedback/Feedback";
import DataDisplay from "./material-ui/DataDisplay/DataDisplay";
import SimpleCounter from "./redux/SimpleCounter";
import AsyncRedux from "./redux/AsyncRedux";
import ReduxForm from "./redux/ReduxForm";

export default function App() {
	return (
		<div>
			<CssBaseline />
			<Router history={history}>
				<>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/material-ui/layout" exact component={Layout} />
					<Route path="/material-ui/form" exact component={Form} />
					<Route path="/material-ui/navigation" exact component={Navigation} />
					<Route path="/material-ui/surfaces" exact component={Surfaces} />
					<Route path="/material-ui/feedback" exact component={Feedback} />
					<Route
						path="/material-ui/datadisplay"
						exact
						component={DataDisplay}
					/>
					<Route path="/redux/simple-counter" exact component={SimpleCounter} />
					<Route path="/redux/redux-thunk" exact component={AsyncRedux} />
					<Route path="/redux/redux-form" exact component={ReduxForm} />
				</>
			</Router>
		</div>
	);
}
