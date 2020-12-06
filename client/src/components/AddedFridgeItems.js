
import React from "react";

import "../components_stylesheets/ItemTodo.css";

function AddedFridgeItems(props) {
    let [count, setCount] = React.useState(props.count);

    return (
        <li key={props.item.id} className="list-group-item todo_item py-1 my-1">

            <div className="btn_delete_todo text-right">
                <i className="far fa-trash-alt" onClick={() => props.onClick(props.item.id)}/>
            </div>

            <div className="d-flex flex-column p-0 m-0">
                <p className="m-0 item_title">{props.item.name}</p>
                <p className="m-0">
                    <strong>Expire in</strong> - {props.item.date}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                    <p><strong>Quantity</strong></p>
                    <p>
                        <span className="item_icon" onClick={() => {setCount(count + 1)}}>
                            <i className="fas fa-plus"></i>
                        </span>
                        <span className="item_count" onChange={props.handleCount(props.item.id, count)}>{count}</span>
                        <span className="item_icon" onClick={() => { if (count > 1) setCount(count - 1);}}>
                            <i className="fas fa-minus"></i>
                        </span>
                    </p>
                </div>
            </div>
        </li>
    );
};

export default AddedFridgeItems;
