import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "../../Styles/PersonalDetails.css";


export default class PersonalDetails extends Component {
	constructor(props) {
		super(props);

		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.delete("http://localhost:4000/emplooyee/delete/" + this.props.obj._id)
			.then(this.setState({ redirect: true }))
			.catch((err) => console.log(err));
		alert("Your Account Successfully Deleted....");
		window.location.replace("/login");
	}

	render() {
		return (
			<div className='PersonalDetailstable'>
				{/* <div className='header'>
					<img src={logo} alt='' />
					<h2>My Profile</h2>
				</div> */}
				<table className='tale table-striped'>
					<tr>
						<td style={{ fontWeight: "bold" }}>Name</td>
						<td>{this.props.obj.name}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Email</td>
						<td>{this.props.obj.email}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Mobile</td>
						<td>{this.props.obj.mobile}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Address</td>
						<td>{this.props.obj.adress}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Age</td>
						<td>{this.props.obj.age}</td>
					</tr>
					{/* <tr>
						<td style={{ fontWeight: "bold" }}>empId</td>
						<td>{this.props.obj.empId}</td>
					</tr> */}
					{/* <tr>
						<td style={{ fontWeight: "bold" }}>Emp No</td>
						{/* <td>{this.props.obj.phoneNu}</td> *
					</tr> */}

					<tr className='proile-actions'>
						<td>
							{/* <button className='btn'>
								<Link to={'/EditEmployee/' + this.props.obj._id}>Edit</Link> }
							</button> */}
						</td>
						<td>
							{/* <button className='btn' onClick={this.delete}>
								Delete Account
							</button> */}
						</td>
					</tr>
				</table>
				
			</div>
		);
	}
}
