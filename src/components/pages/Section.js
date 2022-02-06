import React, { useState } from "react";
import "../styles/Section.css";
import { Link } from "react-router-dom";
import Serenity from "../rubrik/Serenity";
import Equanimity from "../rubrik/Equanimity";
import Tranquillity from "../rubrik/Tranquillity";
import Modal from '../rubrik/Modal'

const Section = () => {
	const [text, setText] = useState('first-con');
	const [isModalActive, setIsModalActive] = useState(false);

const isActive = () => {
	setIsModalActive(!isModalActive)
}

	return (
		<div className="section">
			<div>
				<div className="change-box">
					<button
						className="state-change-btn"
						onClick={() => setText("first-con")}
					>
						Serenity
					</button>
					<button
						className="state-change-btn"
						onClick={() => setText("second-con")}
					>
						Equanimity
					</button>
					<button
						className="state-change-btn"
						onClick={() => setText("third-con")}
					>
						Tranquility
					</button>
				</div>
				<div>
					{text === "first-con" && <Serenity />}
					{text === "second-con" && <Equanimity />}
					{text === "third-con" && <Tranquillity />}
					<div className="button">
						<Link onClick={isActive} to='/' className="section-button">Search</Link>
					</div>

					{isModalActive && <Modal isActive={isActive}/>}
				</div>

			</div>
		</div>
	);
};

export default Section;
