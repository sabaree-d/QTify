import React from 'react';
//styles
import styles from "./feedbackModal.module.css";
//mui
import Modal from '@mui/material/Modal';
//components
import Button from '../Button/Button';
//assests
import closeButton from "../../assets/closeButton.png"


const FeedbackModal = props => {
    const { modalClose, open } = props;

    //functions
    const handleSubmit = evt=> {
        evt.preventDefault();
        alert("Feed back submitted!")
    };

    return (
        <Modal 
            open={open}
            onClose={modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.FeedbackFormContainer}>
                <div className={styles.FeedbackFormContainerHead}>
                    <span></span>
                    <h4>Feedback Form</h4>
                    <img src={closeButton} onClick={modalClose}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input required type='text' placeholder='Full Name'/>
                    <input required type='email' placeholder='Email ID'/>
                    <input required type='text' placeholder='Subject'/>
                    <input required type='text' placeholder='Description'/>
                    <Button>Submit Feedback</Button>
                </form>
            </div>
        </Modal>
    );
};

export default FeedbackModal;