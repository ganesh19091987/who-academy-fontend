/* 

Component : App Routes

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

/** ****************************** Import Components And Pages *************** */
import Header from "./Header";
import Footer from "./Footer";

import course from "./course/index";
import student from "./student/index";
import author from "./author/index";
class Routes extends Component {
	render() {
		return (
			<div className="App">
				<Header />
                <Switch>
                    <Route exact path='/' component={course} />
					<Route exact path='/student' component={student} />
					<Route exact path='/author' component={author} />
                </Switch>
				<Footer />
			</div>
		);
	}
}

export default Routes;