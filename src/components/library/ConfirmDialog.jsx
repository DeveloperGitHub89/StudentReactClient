import { Button, Modal } from "react-bootstrap";

export function ConfirmDialog(props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.message}</Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onYes}>
                    Yes
                </Button>
                <Button variant="danger" onClick={props.onClose}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    )
}