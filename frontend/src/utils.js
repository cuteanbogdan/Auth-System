import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const SignInComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const submitSignIn = () => {
        fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
            .then((json) => {
                console.log("Submitted data login", json);
            }).catch((err) => {
                console.error(err)
            })
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" onClick={submitSignIn}>
                Submit
            </Button>
        </Form>
    )
}

export const SignUpComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const submitSignUp = () => {
        fetch("http://localhost:5000/api/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })
            .then((json) => {
                console.log("Submitted data login", json);
            }).catch((err) => {
                console.error(err)
            })
    }
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" onChange={handleChangeName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" onClick={submitSignUp}>
                Submit
            </Button>
        </Form>
    )

}
