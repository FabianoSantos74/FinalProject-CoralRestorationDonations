import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Views/Home.jsx";
import { About } from "./Views/About.jsx";
import { Contact } from "./Views/Contact.jsx";
import { OrgProfile } from "./Views/OrgProfile.jsx";
import { ThankYou } from "./Views/ThankYou.jsx";
import Header from "./component/Header.jsx";

export class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
							<Route
								exact
								path="/orgprofile"
								component={OrgProfile}
							/>
							<Route
								exact
								path="/thankyou"
								component={ThankYou}
							/>
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
