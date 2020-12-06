import React from "react";

import "../components_stylesheets/ItemTodo.css";

const ItemTodo = ({ item, toggle, editToggle, setId, setName }) => {
  // const [count, setCount] = React.useState(1);

  return (
    <li key={item.id} className="list-group-item todo_item py-1 my-1">
      {/* <div className="btn_delete_todo text-right">
        <i
          className="far fa-trash-alt"
          onClick={() => {
            setId(item.id);
            setName(item.name);
            toggle();
          }}
        ></i>
      </div> */}
      <div className="d-flex flex-column p-0 m-0">
        <div className="d-flex justify-content-between align-items-center my-1">
          <p className="m-0 item_title">{item.name}</p>
          <div className="btn_delete_todo">
            <i
              class="far fa-edit pr-2"
              onClick={() => {
                setId(item.id);
                setName(item.name);
                editToggle();
              }}
            ></i>
            <i
              className="far fa-trash-alt"
              onClick={() => {
                setId(item.id);
                setName(item.name);
                toggle();
              }}
            ></i>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-1">
          <p className="m-0">
            <strong>Expires by:</strong>
          </p>
          <span>{item.date}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p>
            <strong>Quantity</strong>
          </p>
          <p>
            <span className="item_count">{item.quantity}</span>
            {/* <span className="item_icon" onClick={() => setCount(count + 1)}>
              <i className="fas fa-plus"></i>
            </span>
            <span className="item_count">{count}</span>
            <span
              className="item_icon"
              onClick={() => {
                if (count > 1) setCount(count - 1);
              }}
            >
              <i className="fas fa-minus"></i>
            </span> */}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ItemTodo;
