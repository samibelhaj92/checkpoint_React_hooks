import {ListGroup, ListGroupItem,Card} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import React from "react";


function MovieCard({el}) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
    return (
      <div className="MyMovieCard">
        

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {el.posterURL} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>{el.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Director_ {el.director}</ListGroupItem>
    <ListGroupItem>Runtime_ {el.runtime}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
  </Card.Body>

</Card>


</div>
    );
  }
  
  export default MovieCard;