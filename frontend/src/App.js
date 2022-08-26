import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SignInComponent, SignUpComponent } from "./utils";
function App() {
  const [loginForm, setLoginForm] = useState(false)
  const [signupForm, setSignupForm] = useState(false)


  return (
    <div className="App">
      <div className="Main">
        <Container>
          <Row>
            <Col>
              <Button variant="primary" onClick={() => setLoginForm(!loginForm)}>Login</Button>
              {loginForm && <SignInComponent />}
            </Col>
            <Col>
              <Button variant="primary" onClick={() => setSignupForm(!signupForm)}> Sign Up</Button>
              {signupForm && <SignUpComponent />}
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  );
}

export default App;
