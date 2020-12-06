import React from "react";

// components
import ItemTodo from "./ItemTodo";
import ItemModal from "./ItemModal";

// style
import "../components_stylesheets/MyFridge.css";
import EditItemModal from "./EditItemModal";

const MyFridge = ({ itemList, deleteItem, editItem }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);

  const [id, setId] = React.useState(-1);
  const [name, setName] = React.useState("");

  const toggle = () => {
    setOpenModal(!openModal);
  };

  const editToggle = () => {
    setOpenEditModal(!openEditModal);
  };

  const onDelete = () => {
    deleteItem(id);
    toggle();
  };

  const onEdit = (quantity, date) => {
    editItem(id, quantity, date);
    editToggle();
  };

  return (
    <div className="mt-3 d-flex flex-column align-items-center">
      {itemList.length > 0 ? (
        <>
          <ul className="list-group w-100">
            {itemList.map((item, i) => (
              <ItemTodo
                item={item}
                toggle={toggle}
                editToggle={editToggle}
                setId={setId}
                setName={setName}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>You have not added any ingredients yet!</p>
      )}
      <ItemModal
        openModal={openModal}
        name={name}
        toggle={toggle}
        onClick={onDelete}
      />
      <EditItemModal
        openEditModal={openEditModal}
        editToggle={editToggle}
        name={name}
        onClick={onEdit}
      />
    </div>
  );
};

export default MyFridge;
