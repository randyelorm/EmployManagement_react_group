import React, {useState} from 'react';
import './eachuser.css'
import Modal from 'react-bootstrap/Modal';
import EditForm from "../EDITFORM/EditForm"

const EachUser = ({user, deleteUser, editUser}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
            e.preventDefault();
            deleteUser(user.id);
    }

   

    return (
        <>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
          <EditForm user = {user} editUser= {editUser}/>

        </Modal.Body>
        
</Modal>
        <div className="each-user">
            <h3>Name: {user.first_name} {user.last_name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phne Number: {user.number}</h3>
            <h3>Home Address: {user.home_address}</h3>
            <h3>Job Role: {user.job_role}</h3>
            <h3>Salary: $ {user.salary}.00</h3>
            <div>
                <button onClick = {handleShow}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
               
            </div>
        </div>
        </>
    );
}

export default EachUser;
