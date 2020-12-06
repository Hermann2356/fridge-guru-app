import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import FilterItem from "./FilterItem";

import "../components_stylesheets/LeftbarTab.css";

// import FakeData
import FakeFilterItems from "../FakeData/FakeFilterItems";
import FakeTodoItems from "../FakeData/FakeTodoItems";
import GlobalFridge from "./GlobalFridge";
import MyFridge from "./MyFridge";

const LeftbarTab = ({ checkedItems, setCheckedItems }) => {
  const [activeTab, setActiveTab] = React.useState("1");
  const [selectedItems, setSelectedItems] = React.useState([]);

  const deleteItem = (id) => {
    let filterList = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(filterList);
  };

  const editItem = (id, quantity, date) => {
    let newItem = selectedItems.find((item) => item.id === id);
    newItem.quantity = quantity;
    newItem.date = date;

    let filterItems = selectedItems.map((item) =>
      item.id === id ? newItem : item
    );

    setSelectedItems(filterItems);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      <Nav tabs style={{ cursor: "pointer" }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            My Fridge
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Global Fridge
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {/* my fridge tab */}
          {/* <ListItemTodo data={FakeTodoItems} /> */}
          <MyFridge
            itemList={selectedItems}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </TabPane>
        <TabPane tabId="2">
          {/* ingretients tab */}
          <GlobalFridge
            data={FakeTodoItems}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
          {/* {FakeFilterItems.map((item, i) => (
            <FilterItem
              key={i}
              category={item.name}
              ingredients={item.ingredients}
              image={item.image}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          ))} */}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default LeftbarTab;
