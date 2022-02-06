import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import '../styles/Modal.css';

const Modal = ({ isActive }) => {
	return (
		<div className="modal">
			<div className="close-modal">
				<CloseIcon className="icon" onClick={isActive} />
			</div>

			<div className="inputs">
				<input type="text" placeholder="Serach Staions " />
				<button>Next</button>
			</div>
		</div>
	);
};

export default Modal;
