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
import FakeFilterItems from "../FakeData/FakeFilterItems";
import FakeTodoItems from "../FakeData/FakeTodoItems";
import ListItems from "./ListItems";
import auth from "../services/auth";
import user from "../FakeData/user";
import ListFridgeItems from "./ListFridgeItems";

class LeftbarTab extends React.Component {

    state = {
        activeTab: "1",
        ingredients: [],
        fridgeIngredients: [],
        loading:true,

    }

    getAllIngredients = () => {
        fetch('/api/ingredients')
            .then(res => res.json())
            .then(ingredients => {
                console.log(ingredients);
                let ingredientsMap = {};
                this.setState({
                    ingredients: ingredients.map(ingredient => {
                        return {
                            id: ingredient.id,
                            name: ingredient.name,
                            shelfLife: ingredient.shelfLife,
                            quantity: 0,
                            expiration: null,
                        };
                    }),
                });
            })
            .then(() => {
                console.log(this.state.ingredients);
            })
            .catch(err => {
                console.log(err);
            })
    }

    getAllFridgeIngredients = () => {
        let userId = auth.userInfo.id;
        let fridgeItems = [];
        fetch('/api/fridge/' + userId)
            .then(res => res.json())
            .then(result => {
                return result.map(item => {
                    return {
                        ingredientId: item.ingredientId,
                        quantity: item.quantity,
                        expiration: item.expiration,
                    }
                })
            })
            .then(itemRes => {
                Promise.all( itemRes.map(item => {
                    return fetch('/api/ingredients/' + item.ingredientId)
                        .then(res => res.json())
                        .then(res => {
                            this.setState({
                                fridgeIngredients: [{
                                    id: item.ingredientId,
                                    name: res.name,
                                    quantity: item.quantity,
                                    expiration: item.expiration,
                                }, ...this.state.fridgeIngredients]
                            })
                        })
                }))
                    .then(()=> {
                        console.log(this.state.fridgeIngredients);
                        this.setState({
                            loading: false,
                        })
                    });
            })
            .catch(err => {
                console.log(err);
            })
    }


    componentDidMount() {
        this.getAllIngredients();
        this.getAllFridgeIngredients();
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    };

    render() {
        let loading = this.state.loading;
        if(loading) {
            return (<div><p>...Loading</p></div>);
        }
        return (
            <div className="container">
                <Nav  className={"nav-tabs"} tabs style={{cursor: "pointer"}}>
                    <NavItem>
                        <NavLink
                            className={ classnames({active: this.state.activeTab === "1"})}
                            onClick={() => {
                                this.toggle("1");
                            }}
                        >
                            <span>Ingredients</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === "2"})}
                            onClick={() => {
                                this.toggle("2");
                            }}
                        >
                           <span>My Fridge</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <div>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            {/* my fridge tab */}
                            <ListItems data={this.state.ingredients}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <ListFridgeItems fridgeIngredients = {this.state.fridgeIngredients}/>
                            {/* ingredients tab */}
                            {/*{FakeFilterItems.map((item, i) => (*/}
                            {/*    <FilterItem*/}
                            {/*        key={i}*/}
                            {/*        category={item.name}*/}
                            {/*        ingredients={item.ingredients}*/}
                            {/*        image={item.image}*/}
                            {/*        checkedItems={this.props.checkedItems}*/}
                            {/*        setCheckedItems={this.props.setCheckedItems}*/}
                            {/*    />*/}
                            {/*))}*/}
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }


};

export default LeftbarTab;
