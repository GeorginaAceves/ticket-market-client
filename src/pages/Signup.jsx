import React, { useState } from "react";
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
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = form;
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleChange() {}

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      email,
      password,
    };
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
      <form onSubmit={handleFormSubmission}>
        <Container className="mb-5">
          <Form>
  
          <Row >
            <Col xs={6} className="mb-3">
              <Form.Control placeholder="First name" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>

        </Form>

        <Form>
          <Row>
            <Col xs={12}>
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Username" />
              </InputGroup>
            </Col>
          </Row>
        </Form>

        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}></Form.Label>
            <Col xs={12}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}></Form.Label>
            <Col xs={12}>
              <Form.Control type="password" placeholder="Password" className="mb-4"/>
            </Col>
          </Form.Group >

          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={30} >
               What interests you more?
            </Form.Label>

            <Col sm={30} className="mb-4">
              <Button variant="outline-secondary">Selling</Button>{" "}
              <Button variant="outline-secondary">Buying</Button>{" "}
              <Button variant="outline-secondary">Both</Button>{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col >
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-4">
            <Col >
              <Button type="submit">Sign up</Button>
            </Col>
          </Form.Group>
        </Form>
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
