import React from "react";

import "../components_stylesheets/ListItemTodo.css";

import { BiFoodMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import ItemTodo from "./ItemTodo";

const ListItemTodo = ({ data }) => {
  const [ingredientList, setIngredientList] = React.useState([]);
  const [ingredient, setIngredient] = React.useState("");
  const [itemList, setItemList] = React.useState([]);

  const [openDD, setOpenDD] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const openDropDown = () => {
    setOpenDD(true);
    document.querySelector(".input_icon").style.color = "#fff";
    setIngredient("");
    setIngredientList(data);
  };

  const closeDropDown = () => {
    if (isOpen === false) setOpenDD(false);
    document.querySelector(".input_icon").style.color = "#2b2b2b";
  };

  const onItemClick = (e) => {
    const { target } = e;
    setIngredient("");

    const check = itemList.find((item) => item.name == target.innerText.trim());

    if (check === undefined) {
      const selectItem = ingredientList.find(
        (item) => item.name == target.innerText.trim()
      );

      setItemList([selectItem, ...itemList]);
    } else {
      alert(`${check.name} already added`);
    }
    setOpenDD(false);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    if (value !== "") {
      let filterList = ingredientList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );

      setIngredientList(filterList);
    } else {
      setIngredientList(data);
    }

    setIngredient(value);
  };

  const deleteItem = (id) => {
    let filterList = itemList.filter((item) => item.id !== id);
    setItemList(filterList);
  };

  return (
    <div className="mt-2 drop_down">
      <span className="input_icon">
        <BsSearch />
      </span>
      <input
        className="drop_down_input"
        type="text"
        onClick={openDropDown}
        onBlur={closeDropDown}
        placeholder="Serach Ingredient"
        name="city"
        value={ingredient}
        onChange={handleChange}
        autoComplete="off"
      />
      {openDD && (
        <ul
          className="drop_down_list"
          onClick={onItemClick}
          onMouseLeave={() => {
            if (openDD === true) {
              setIsOpen(false);
            }
          }}
          onMouseEnter={() => {
            setIsOpen(true);
          }}
        >
          {ingredientList.map((item, i) => (
            <li key={item.id} className="drop_down_item">
              <span className="drop_down_icon">
                <BiFoodMenu />
              </span>{" "}
              {item.name}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3">
        {itemList.length > 0 ? (
          <>
            <ul className="list-group">
              {itemList.map((item, i) => (
                <ItemTodo item={item} onClick={deleteItem} />
              ))}
            </ul>
            <button className="btn btn-success w-100 mt-5">Save</button>
          </>
        ) : (
          <p>You have not added any ingredients yet!</p>
        )}
      </div>
    </div>
  );
};

export default ListItemTodo;
