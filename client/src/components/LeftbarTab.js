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
import ListItemTodo from "./ListItemTodo";

const LeftbarTab = ({ checkedItems, setCheckedItems }) => {
  const [activeTab, setActiveTab] = React.useState("1");

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
            Ingredients
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {/* my fridge tab */}
          <ListItemTodo data={FakeTodoItems} />
        </TabPane>
        <TabPane tabId="2">
          {/* ingretients tab */}
          {FakeFilterItems.map((item, i) => (
            <FilterItem
              key={i}
              category={item.name}
              ingredients={item.ingredients}
              image={item.image}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          ))}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default LeftbarTab;
