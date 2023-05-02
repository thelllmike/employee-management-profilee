import React, { Component } from "react";


import "../../Styles/EmployeeView.css";
import axios from "axios";
import EmployeeRow from "./EmployeeRow";
import Footer from './footer'
import jsPDF from "jspdf";
import 'jspdf-autotable';

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


	
	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My All Employees Report";
        const headers = [["name", "empId","email", "posision"]];
    
        const data = this.state.employee.map(elt=> [elt.name, elt.empId,  elt.email,elt.posision]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
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
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
				</table>
				
			</div>
			
			
		);
	}
}
