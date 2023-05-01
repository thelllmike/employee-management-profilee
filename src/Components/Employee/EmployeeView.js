import React, { Component } from "react";


import "../../Styles/EmployeeView.css";
import axios from "axios";
import EmployeeRow from "./EmployeeRow";
import Footer from './footer'

export default class EmployeeView extends Component {
	constructor(props) {
		super(props);
		this.state = { employee: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/emplooyee/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ employee: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.employee.map(function (object, i) {
			return <EmployeeRow obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='EmployeeView'>
				


				<h2 className='main-header'>Employee</h2>
				<form action=''>
					<input type='text' placeholder='search...' />
					<button type='submit'>Search</button>
				</form>
				<p className='add'>
					<a href='/employeeadd'> + Employe Add</a>
				</p>

				<table class='table table-striped'>
					{" "}
					<thead>
						
						<th>Name</th>
						<th>EmpNU</th>
						<th>E-mail</th>
						<th>Position</th>
						{/* <th>Status</th> */}
						<th>Action</th>
					</thead>
					
					<tbody>{this.tabRow()}</tbody>
				</table>
				{/* <Footer/> */}
			</div>
			
		);
	}
}
