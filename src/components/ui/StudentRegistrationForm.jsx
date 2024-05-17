import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useState } from "react";
import { saveStudent } from "../../services/StudentService";
import { ToastNotification } from "../library/ToastNotification";
import { NavigationBar } from "./NavigationBar";

export function StudentRegistrationForm() {

    const [formData, setFormData] = useState({ id: '', name: '', phone: '', marks: '' });

    const [showToast, setShowToast] = useState(false);

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        saveStudent(formData)
            .then((response) => {
                setShowToast(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <NavigationBar/>
            <Container>
                <Header title="Register a student now" description="This is form to add a student" />
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Id" name="id" onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Marks</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Marks" name="marks" onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Button type="submit" variant="primary">Register Student</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <ToastNotification
                    background="success"
                    show={showToast}
                    message="Student registered"
                    onClose={handleCloseToast}
                />
                {/* <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Student registered</Toast.Body>
                </Toast>
            </ToastContainer> */}

            </Container>
        </>
    )
}