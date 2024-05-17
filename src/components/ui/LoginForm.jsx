import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useEffect, useState } from "react";
import { adminLogin, getToken, storeToken } from "../../services/AdminService";
import { Navigate, useNavigate } from "react-router-dom";
import { STUDENT_HOME_ROUTE } from "../../constants/AppRoute";

export function LoginForm() {

    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if (getToken()) {
           navigate(STUDENT_HOME_ROUTE) 
        }
    },[navigate])

    const handleFieldChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await adminLogin(credentials);
            console.log(response);
            if (response.status === 200) {
                storeToken(response.data.token);
                navigate(STUDENT_HOME_ROUTE);
            }
        } catch (error) {
            if (error.response.status === 400) {
                setLoginError(error.response.data.message);
            }
        }


    }

    return (
        <Container>
            <Header title="Welcome to Student Management Application" description="Please login to continue" />
            <Container className="mt-5">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="username" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name="password" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button variant="primary" type="submit">Login</Button>
                        </Col>
                    </Row>
                </Form>

                {
                    loginError.length !== 0 ?
                        <Row className="mt-3">
                            <Col lg={4}>
                                <Alert variant="danger">{loginError}</Alert>
                            </Col>
                        </Row> : null
                }

            </Container>
        </Container>
    )
}