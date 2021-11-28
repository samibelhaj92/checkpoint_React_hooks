import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Example() {
    const [show, setShow] = useState(false);
    const [posterURL, setPosterURL] = useState('')
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [director, setDirector] = useState('');
    const [rate, setRate] = useState(0);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add to collection
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
    <input type="text" value={posterURL} onChange={(event)=> setPosterURL ({text: event.target.value})}>Title</input>
     <input type="text" value={title} onChange={(event)=> setTitle ({text: event.target.value})}>Title</input>
     <input type="text" value={year} onChange={(event)=> setYear ({text: event.target.value})}>Year</input>
     <input type="text" value={director} onChange={(event)=> setDirector ({text: event.target.value})}>Director</input>
     <input type="text" value={rate} onChange={(event)=> setRate ({text: event.target.value})}>Rate</input>
      </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Example;