import { Modal, Button, Spinner } from "react-bootstrap";

const ModalParent = (props: any): JSX.Element => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      {/* Header */}
      <Modal.Header closeButton>
        <Modal.Title className="fs-2" id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body>{props.children}</Modal.Body>

      {/* Footer */}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        {props.confirm && (
          <Button
            disabled={props.loading}
            onClick={props.onConfirm}
            variant="danger"
          >
            Confirm
            {props.loading && (
              <Spinner className="mx-1" animation="border" variant="light" />
            )}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalParent;
