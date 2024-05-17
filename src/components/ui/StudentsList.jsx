import { Alert, Button, Container, Table } from "react-bootstrap";
import { Header } from "../library/Header";
import { useEffect, useState } from "react";
import { fetchAllStudents, removeStudent } from "../../services/StudentService";
import { ToastNotification } from "../library/ToastNotification";
import { ConfirmDialog } from "../library/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";

export function StudentsList() {

    const [students, setStudents] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [selectedStudentId, setSelectedStudentId] = useState(0);

    const [showToast, setShowToast] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, []);
    const closeModal = () => {
        setShowModal(false);
    }

    const getAllStudents = async () => {
        const response = await fetchAllStudents();
        setStudents(response.data);
    }

    const handleYesClick = async () => {
        const response = await removeStudent(selectedStudentId);
        if (response.status === 200) {
            setShowModal(false);
            setShowToast(true);
            getAllStudents();
        }

    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Header title="List of Students" description="Here you can view, delete, and edit the student" />
                <Container className="mt-4">
                    {
                        students.length === 0 ?
                            <Alert variant="danger">No Student Exists</Alert>
                            :
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Marks</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((s) => {
                                            return (
                                                <tr>
                                                    <td>{s.id}</td>
                                                    <td>{s.name}</td>
                                                    <td>{s.marks}</td>
                                                    <td>{s.phone}</td>
                                                    <td>
                                                        <Button variant="danger" onClick={() => {
                                                            setShowModal(true);
                                                            setSelectedStudentId(s.id);
                                                        }}>Delete</Button>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <Button variant="primary" onClick={() => {
                                                            navigate(`/edit-student/${s.id}`)
                                                        }}>Edit</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                    }

                </Container>
                <ConfirmDialog
                    show={showModal}
                    message={`Are you sure, you want to delete ${selectedStudentId} ?`}
                    onYes={handleYesClick}
                    onClose={closeModal}
                />
                <ToastNotification
                    background="light"
                    onClose={handleCloseToast}
                    show={showToast}
                    message="Student Removed"
                />
                {/* <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove {selectedStudentId}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleYesClick}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal> */}

                {/* <ToastContainer position="top-end">
                <Toast bg="light" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body>Student Removed</Toast.Body>
                </Toast>
            </ToastContainer> */}
            </Container>
        </>
    )
}