import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditItemModal = ({ openEditModal, editToggle, name, onClick }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [date, setDate] = React.useState("");

  return (
    <div>
      <Modal isOpen={openEditModal} toggle={editToggle}>
        <ModalHeader toggle={editToggle}>{name}</ModalHeader>
        <ModalBody>
          <div className="form">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Quantity</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              if (date !== "") {
                onClick(quantity, date);
                setQuantity(1);
                setDate("");
              } else {
                alert("fields cannot be empty");
              }
            }}
          >
            Update
          </Button>
          <button className="btn bg-none border-secondary" onClick={editToggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditItemModal;
