import React, { useState, useEffect } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";


export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    remember: false,
    agree: false,
    interest: ""
  });
  const { firstName, lastName, username, email, password,agree, remember,interest } = form;
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleChange() {}


  useEffect(() => {
    console.log(form)
  }, [form])

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log("SIGN UP")
    const credentials = {
      firstName,
      lastName,
      username,
      email,
      password,
      remember,
      agree,
      interest
    };
    console.log("credentiall", credentials)
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="auth__form">
      <h3 className="mb-5">Sign Up</h3>
      <form>
        <Container className="mb-5">
          <Row >
            <Col xs={6} className="mb-3">
              <Form.Control placeholder="First name" name="firstName" value={firstName} onChange={handleInputChange}/>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Control placeholder="Last name" name="lastName" value={lastName} onChange={handleInputChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Username" name="username" value={username} onChange={handleInputChange}/>
              </InputGroup>
            </Col>
          </Row>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}></Form.Label>
            <Col xs={12}>
              <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}></Form.Label>
            <Col xs={12}>
              <Form.Control type="password" placeholder="Password" className="mb-4" name="password" value={password} onChange={handleInputChange}/>
            </Col>
          </Form.Group >

          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={30} >
               What interests you more?
            </Form.Label>

            <Col sm={30} className="mb-4">
              <Button variant="outline-secondary" onClick={() => setForm({...form, interest: "Selling"})}>Selling :)</Button>{" "}
              <Button variant="outline-secondary" onClick={() => setForm({...form, interest: "Buying"})}>Buying</Button>{" "}
              <Button variant="outline-secondary" onClick={() => setForm({...form, interest: "Both"})}>Both</Button>{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col >
              <Form.Check label="Remember me" name="remember" checked={remember}  onChange={ (e) => {
                if(e.target.value === "on"){
                  setForm({...form, remember: true})
                }else{
                  setForm({...form, remember: false})
                }
                
              }}/>
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Check
              required
              name="agree"
              label="Agree to terms and conditions"
              onChange={ (e) => {
                if(e.target.value === "on"){
                  setForm({...form, agree: true})
                }else{
                  setForm({...form, agree: false})
                }
              }}
              checked={agree}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-4">
            <Col >
              <Button onClick={handleFormSubmission}>Sign up</Button>
            </Col>
          </Form.Group>
        </Container>

        {error && (
          <div>
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
