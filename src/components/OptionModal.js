import React from 'react';
import ReactModal from 'react-modal';

const OptionModal = props => (
    <ReactModal
    ariaHideApp={false}
    onRequestClose={props.clearSelectedOption}
    isOpen={!!props.toggleModal}
    contentLabel="selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="btn" onClick={props.clearSelectedOption}>Okay</button>
    </ReactModal>
)

export default OptionModal;