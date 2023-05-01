import React, { Component } from "react";
import axios from "axios";
import ProfileTableRow from "./PersonalTableThrow";
import { Link } from "react-router-dom";
import "../../Styles/PersonalDetails.css";
import profile from "../../images/profile-image.svg";
import "jspdf-autotable";

export default class PersonalDetails extends Component {
	constructor(props) {
		super(props);

		this.state = { employee: [] ,search:"" };
		this.state.Email = this.props.match.params.id;
	}
	componentDidMount() {
		
		axios
			.get("http://localhost:4000/profile/" + this.props.match.params.id)
			.then((response) => {
				//  alert('Data Tika :'+response.data)
				this.setState({ employee: response.data });
			})
			.catch(function (error) {
				console.log(error);
				alert("Pass una");
			});
	}

	tabRow() {
		return <ProfileTableRow obj={this.state.employee} />;
	}

	

	


	render() {
		return (
			<div className='PersonalDetails'>
				

				<div className='header'>
				
					<h2>My Profile</h2>
				</div>
				
				<div className='profile'>
					<img src={profile} alt='' />
					<h2>{this.state.employee.name}</h2>
					<p>{this.state.employee.posision}</p>
				</div>
				<div className='title1'>
					<h2>Personal Details</h2>
				</div>

			 {this.tabRow()} 
			
				

				<div className='title2'>
					<h2>Employment Details</h2>
				</div>
				
				<table className='table2'>
					<tr>
						<td style={{ fontWeight: "bold" }}>Emp No</td>
						<td>{this.state.employee.empId}</td>
					</tr>
				
				</table>
	
			
			</div>
		);
	}
}
