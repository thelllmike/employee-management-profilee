import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
 import Login from "./Components/Login";
import PageNotFound from "./Components/Employee/PageNotFound";
import EmployeeAdd from "./Components/Employee/EmployeeAdd";
import EmployeeView from "./Components/Employee/EmployeeView";
 import PersonalDetails from "./Components/Employee/PersonalDetails";
import EditEmployee from "./Components/Employee/EditEmployee";
import employeeSearch from "./Components/Employee/employeeSearch";
// import PersonalDetailsAdmin from "./Components/Employee/PersonalDetailsAdmin";


class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						
						<Route path='/employeeview' component={EmployeeView} />
					
						<Route path='/employeeadd' component={EmployeeAdd} />
						<Route path='/EditEmployee/:id' component={EditEmployee} />
						<Route path='/personaldetails/:id' component={PersonalDetails} />
					
						<Route path='/Login' component={Login} />
						<Route path='/employeeSearch/:pathParam1?' component={employeeSearch} />
						<Route path='/pagenotfound' component={PageNotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
