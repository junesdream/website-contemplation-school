import React, { useState } from 'react';
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import Gardenlogo from '../assets/garden-logo.png'
import '../styles/Header.css';

const Header = () => {

     const [open, setOpen] = useState(false);

		const showMenu = () => {
			setOpen(!open);
		};
  return (
		<div className="header">
			<div className="header-logo">
				<img src={Gardenlogo} alt="logo" />
			</div>
			<div className="hamburger-icon">
				<MenuIcon className="icon" onClick={showMenu} />
			</div>

			<nav>
				<ul className={open ? "list-items active" : "list-items"}>
					<div className="close-icon">
						<CloseIcon className="icon" onClick={showMenu} />
					</div>

					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contemplation">Contemplation</Link>
					</li>
					<li>
						<Link to="/vision">Vision</Link>
					</li>
					<li>
						<Link to="/pricing">Pricing</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</div>
  );
};

export default Header;
