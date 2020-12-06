import React from "react";

import { Modal, ModalBody, ModalFooter } from "reactstrap";

const ItemModal = ({ openModal, toggle, name, date, quantity, onClick }) => {
  return (
    <div>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalBody>
          {date !== undefined ? (
            <div>
              <p>
                Ingredient: <span>{name}</span>
              </p>
              <p>
                Expiration Date: <span>{date}</span>
              </p>
              <p>
                Quantity: <span>{quantity}</span>
              </p>
            </div>
          ) : (
            <p>
              Are you sure you want to delete{" "}
              <strong className="text-capitalize">{name}</strong>
            </p>
          )}
        </ModalBody>
        <ModalFooter>
          <button
            className={
              date !== undefined
                ? "btn bg-none border-success"
                : "btn bg-dark text-light"
            }
            onClick={onClick}
          >
            {date !== undefined ? "Save" : "Delete"}
          </button>
          <button className="btn bg-none border-secondary" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ItemModal;
