import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Popup(props) {


    const { tittle, children, openPopup, setOpenPopup } = props;

    return (
        <div>
            <Modal show={openPopup} onHide={() => setOpenPopup(false)}>
                <Modal.Header closeButton={() => setOpenPopup(false)}>
                    <Modal.Title>{tittle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </div>
    );
}
