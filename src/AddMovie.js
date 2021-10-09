import { useState } from "react";
import {Modal , Button} from 'react-bootstrap';

function AddMovie({addMovie}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState(0);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMovie = () => {
        handleClose();
        addMovie({id:Math.random(),title,description,posterURL,rating});  
    }

    return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <Modal.Title>ADD A MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span>Title:</span>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <br/>
            <span>Description:</span>
            <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} />
            <br/>
            <span>Poster URL:</span>
            <input type='text' value={posterURL} onChange={(e)=>setPosterURL(e.target.value)} />
            <br/>
            <span>Rating:</span>
            <input type='number' value={rating} onChange={(e)=>setRating(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleMovie}>
            Save Changes
        </Button>
        </Modal.Footer>
    </Modal>
    </>
    );
}
export default AddMovie;