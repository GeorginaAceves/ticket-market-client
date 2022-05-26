import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';

const TicketsPage = (props) => {
  const [tickets, setTickets] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/alltickets")
      .then((datos) => setTickets(datos.data))
      .catch(console.log);
  }, []);
  return (
    <div>  
      <div className="tickets-content">
      {
        tickets.map(tickets => {
          return <Card
          key={tickets._id} 
          style={{ width: "18rem" }}>
        <Card.Img variant="top" src={tickets.img} />
        <Card.Body>
          <Card.Title>{tickets.title}</Card.Title>
          <Card.Text >
          Description: {tickets.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem >Location: {tickets.location}</ListGroupItem>
          <ListGroupItem >Quantity: {tickets.quantity}</ListGroupItem>
          <ListGroupItem >Price: ${tickets.price_per_ticket}</ListGroupItem>
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
      
      
        })
      }

      </div>
      
    </div>
  );
};

export default TicketsPage;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
 
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
 
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
 

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             GA
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Title event"
//         subheader="Date,Time, Adress"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="image"
//         alt="username"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           Price
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>

//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>

//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>

//         <IconButton aria-label="shopping">
//           <ShoppingCartIcon />
//         </IconButton>

//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Description:</Typography>
//           <Typography paragraph>
//             Here go the description of the event and the details of the ticket
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
