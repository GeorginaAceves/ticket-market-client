import React, { useState } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    InputGroup,
    FormControl,
    Container,
  } from "react-bootstrap";
  import axios from "axios"
  import { useNavigate } from "react-router-dom"
  import "./auth.css";
//img, title, category, description, quantity, price_per_ticket, date, location, user_id 
function NewTicketPage(props) {
  const [ title,setTitle ] = useState("")
  const [ description,setDescription ] = useState("")
  const [ price_per_ticket,setPPT ] = useState("")
  const [ date,setDate ] = useState("")
  const [ location,setLocation ] = useState("")
  const [ category,setCategory ] = useState("")
  const [ quantity,setQuantity ] = useState("")

  const navigate = useNavigate()
  

  function guardarTicket(){
    axios.post(`${process.env.REACT_APP_SERVER_URL}/newticket`, { title,description, price_per_ticket, date, location, location, category, userId:props?.user?._id, quantity })
    .then( ticketGuardado => {
      console.log(ticketGuardado)
      navigate("/alltickets")
    })
    .catch(console.log)
  }

  return (
    <div className="auth__form">
      <h3 className="mb-5">Add new ticket to sales</h3>
      
        <Container className="mb-5">

        <Form.Group className="mb-3">
            <Form.Control placeholder="Title ticket" value={title} onChange={ (e) => setTitle(e.target.value)}/>
          </Form.Group>
        <Form>
          <Row>
            <Col xs={6} className="mb-3">
              <Form.Control placeholder="Date" type='datetime-local' value={date} onChange={ (e) => setDate(e.target.value)}/>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Control placeholder="Adress" value={location} onChange={ (e) => setLocation(e.target.value)}/>
            </Col>
          </Row>
        </Form>

          <InputGroup className="mb-12" >
            <InputGroup.Text> $ </InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" value={price_per_ticket} onChange={ (e) => setPPT(e.target.value)}/>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup className="mb-12" >
            <FormControl aria-label="Quantity" value={quantity} onChange={ (e) => setQuantity(e.target.value)}/>
          </InputGroup>

          <Form>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add a description of your ticket and the event</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={ (e) => setDescription(e.target.value)}/>
          </Form.Group>
         
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>Selecciona la categoria</option>
            <option value="CINEMA">Cinema</option>
            <option value="THEATER">Theater</option>
            <option value="CONCERT">Concert</option>
          </select>

        </Form>
        <br />
        <Button onClick={guardarTicket}>Add Ticket</Button>

</Container>

</div>
  )
}

export default NewTicketPage





//titulo
//fecha
//lugar
//img
//precio
//descripcion