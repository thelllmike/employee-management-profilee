import React, { Component } from "react";

import "../../Styles/PageNotFound.css";

export default class PageNotFound extends Component {
	render() {
		return (
			<div>
				<div className='notfound'>
					<h1>404 Not Found</h1>
					<p>Sorry, the page you requested could not be found.</p>
					<p>
						Goto <a href='./'> Homepage</a>
					</p>
				</div>
			</div>
		);
	}
}
