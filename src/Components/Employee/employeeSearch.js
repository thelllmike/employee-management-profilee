import React, { Component } from "react";


import "../../Styles/EmployeeView.css";
import axios from "axios";
import EmployeeRowsearch from "./EmployeeRow";
import Footer from './footer'

export default class EmployeeView extends Component {
	constructor(props) {
		super(props);
		this.state = { employees: [], search: "" };
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
		
		axios.get('http://localhost:4000/emplooyee/search/'+this.props.match.params.pathParam1)
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ employees: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.employees.map(function (object, i) {
			return <EmployeeRowsearch obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='EmployeeView'>
				


				<h2 className='main-header'>Employee</h2>

				<form onSubmit={this.onSubmit}>
					<input type='text' placeholder='search...' required
									value={this.state.search}
									onChange={this.onChangeSearch} />

					<button type='submit'>
					{" "}
					<a href={"/employeeSearch/" + this.state.search}>Search</a>
					</button>
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
