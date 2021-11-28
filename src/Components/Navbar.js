import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import React from "react";


function Navigation({setSearch, setSearchRate}) {
  const ratingChanged = (newRating) => {
        setSearchRate(newRating);
      };
    return (
      <div className="MyNavigation">
    <Navbar bg="dark" expand="lg" sticky="top">
    <Container fluid>
    <Navbar.Brand href="#">James Bond Collection</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">External Links</Nav.Link>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange= {e=> setSearch(e.target.value)}
        />
        <ReactStars count={5} value={ratingChanged} size={24} activeColor="#ffd700" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
  }
  
  export default Navigation;