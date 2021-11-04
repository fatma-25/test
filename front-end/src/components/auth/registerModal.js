import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerHandler } from "../../redux/action/auth-action";
import { useHistory } from "react-router";
export default function Example() {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [status, setStatus] = useState("");
  const [account, setAccount] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);localStorage.clear()};
  const history= useHistory()
  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault()
    const newUser = { name, lastName, email, password, status, account };
    dispatch(registerHandler(newUser));
    history.push("/dashboard")
    setname("");
    setlastName("");
    setemail("");
    setpassword("");
    setStatus("");
    handleClose();
  };
  return (
    <>
      <Button style={{backgroundColor:"#1ABEEA"}} variant="primary" onClick={handleShow}>
        SignUp
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name "
                onChange={(e) => setlastName(e.target.value)}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {setemail(e.target.value);   if(email.includes("admin")) {  setStatus("admin"); setAccount("true") ;console.log(status,"sta")} else {setStatus("user"); setAccount("false")}} }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={registerUser} text="submit">
    
              Submit
    
            </Button>
        
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
