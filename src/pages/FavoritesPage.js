import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";

const FavoritesPage = (props) => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/favorites`)
      .then((datos) => setTickets(datos.data))
      .catch(console.log);
  }, []);
  return (
    <div>
      <div className="tickets-content">
        {tickets.map((tickets) => {
          return (
            <Card key={tickets._id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tickets.img} />
              <Card.Body>
                <Card.Title>{tickets.title}</Card.Title>
                <Card.Text>Description: {tickets.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Location: {tickets.location}</ListGroupItem>
                <ListGroupItem>Quantity: {tickets.quantity}</ListGroupItem>
                <ListGroupItem>
                  Price: ${tickets.price_per_ticket}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="shopping">
                  <ShoppingCartIcon />
                </IconButton>

                <IconButton aria-label="Contact">
                  <EmailIcon />
                </IconButton>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};


export default FavoritesPage
