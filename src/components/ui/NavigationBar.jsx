import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, REGISTRATION_ROUTE, STUDENTS_LIST_ROUTE, STUDENT_HOME_ROUTE } from "../../constants/AppRoute";
import { removeToken } from "../../services/AdminService";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {

   const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate(BASE_ROUTE);
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Student App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={STUDENT_HOME_ROUTE}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to={REGISTRATION_ROUTE}>
                            <Nav.Link>Register Student</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={STUDENTS_LIST_ROUTE}>
                            <Nav.Link>Students List</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="success" onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    )
}