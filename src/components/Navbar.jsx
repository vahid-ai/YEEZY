import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" activeClassName="active" end>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" activeClassName="active">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" activeClassName="active">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
