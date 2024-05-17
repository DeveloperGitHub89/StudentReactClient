import { Toast, ToastContainer } from "react-bootstrap";

export function ToastNotification(props) {
    return (
        <ToastContainer position="top-end">
            <Toast bg={props.background} onClose={props.onClose} show={props.show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Confirmation</strong>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}