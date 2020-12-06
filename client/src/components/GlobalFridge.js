import React from "react";

// style
import "../components_stylesheets/GlobalFridge.css";

// components
import ItemModal from "./ItemModal";

// icons
import { BiFoodMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineNumber } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const GlobalFridge = ({ data, setSelectedItems, selectedItems }) => {
  const [ingredientList, setIngredientList] = React.useState([]);

  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [date, setDate] = React.useState("");

  const [openDD, setOpenDD] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const toggle = () => {
    setOpenModal(!openModal);
  };

  const randomID = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const openDropDown = () => {
    setOpenDD(true);
    document.querySelector(".input_icon").style.color = "#fff";
    setName("");
    setIngredientList(data);
  };

  const closeDropDown = () => {
    if (isOpen === false) setOpenDD(false);
    document.querySelector(".input_icon").style.color = "#2b2b2b";
  };

  const onItemClick = (e) => {
    const { target } = e;

    if (target.classList.contains("drop_down_item")) {
      setName(target.innerText.trim());
    }

    setSelected(true);

    // const check = itemList.find((item) => item.name == target.innerText.trim());

    // if (check === undefined) {
    //   const selectItem = ingredientList.find(
    //     (item) => item.name == target.innerText.trim()
    //   );

    //   setItemList([selectItem, ...itemList]);
    // } else {
    //   alert(`${check.name} already added`);
    // }

    setOpenDD(false);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);

    if (value !== "") {
      let filterList = ingredientList.filter(
        (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );

      if (filterList.length > 0) {
        setIngredientList(filterList);
      } else {
        setIngredientList([]);
      }
    } else {
      setIngredientList(data);
    }
  };

  const saveItem = () => {
    if (name !== "" && date !== "") {
      setSelectedItems([
        { id: randomID(), name: name, date: date, quantity: quantity },
        ...selectedItems,
      ]);
      setSaved(true);
    } else {
      alert("fill all the fields");
    }

    setQuantity(1);
    toggle();
    setSelected(false);
    setTimeout(() => {
      setSaved(false);
      setName("");
    }, 1000);
  };

  return (
    <>
      {saved && (
        <div className="alert alert-success mt-2">
          <strong className="text-capitalize">{name}</strong> has been stored to
          my fridge
        </div>
      )}
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
          value={name}
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
            {ingredientList.length > 0 ? (
              ingredientList.map((item, i) => (
                <li key={item.id} className="drop_down_item">
                  <span className="drop_down_icon">
                    <BiFoodMenu />
                  </span>{" "}
                  {item.name}
                </li>
              ))
            ) : (
              <li className="p-1">
                <strong>{name}</strong> seems to not be found, do you still want
                to add it to My Fridge anyway?
                <br />
                <span>Please click here to confirm</span>
              </li>
            )}
          </ul>
        )}
        {selected && (
          <div className="mt-3 d-flex flex-column align-items-center">
            <div className="guest-wrapper d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-around w-100 pl-1">
                <span className="guest-icon">
                  <AiOutlineNumber />
                </span>
                <span className="guest-title">Quantity</span>
              </div>
              <div className="d-flex align-items-center w-100 justify-content-around">
                <span
                  className="guest-icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <AiOutlinePlus />{" "}
                </span>
                <span className="guest-counter">{quantity}</span>
                <span
                  className="guest-icon"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  <AiOutlineMinus />
                </span>
              </div>
            </div>
            <div className="form-group row w-100 mt-2">
              <label for="date">Best Before</label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
              />
            </div>
            <button className="btn btn-success w-100 mt-4" onClick={toggle}>
              Save
            </button>
            <ItemModal
              openModal={openModal}
              toggle={toggle}
              name={name}
              date={date}
              quantity={quantity}
              onClick={saveItem}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalFridge;
