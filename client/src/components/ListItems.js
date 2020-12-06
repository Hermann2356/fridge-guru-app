import React from "react";
import {BiFoodMenu} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import "../components_stylesheets/ListItemTodo.css";
import AddedFridgeItems from "./AddedFridgeItems";


class ListItems extends React.Component {
    num = 1;
    state = {
        ingredientList: [],
        search_txt: "",
        itemList: [],
        openDD: false,
        isOpen: false,


    }

    openDropDown = () => {
        console.log("openDropDown")
        console.log(this.state)
        this.setState({openDD: true});
        document.querySelector(".input_icon").style.color = "#fff";
        this.setState({
            search_txt: "",
            ingredientList: this.props.data,
        });
    }

    closeDropDown = () => {
        console.log("closeDropDown")
        console.log(this.state)
        if (this.state.isOpen === false) {
            this.setState({openDD: false});
            document.querySelector(".input_icon").style.color = "#2b2b2b";
        }
        ;
    };

    onItemClick = (e) => {
        console.log("onItemClick")
        console.log(this.state)
        const {target} = e;
        this.setState({isOpen: true});
        this.setState({search_txt: ""});
        const check = this.state.itemList
            .find(item => item.name === target.innerText.trim());

        if (check === undefined) {
            const selectItem = this.state.ingredientList.find(item => item.name === target.innerText.trim());
            this.setState({itemList: [selectItem, ...this.state.itemList]});
        } else {
            alert(`${check.name} already added`);
        }

        this.setState({
            openDD: false,
            isOpen: false,
        });
        console.log(this.state.itemList)
        ;
    };

    clear = () => {
        this.setState({
            itemList: [],
        })
    }

    handleChange = (e) => {
        console.log("handleChange")
        console.log(this.state)
        const {value} = e.target;
        if (value !== "") {
            let filterList = this.state.ingredientList.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );

            this.setState({ingredientList: filterList});
        } else {
            this.setState({ingredientList: this.props.data});
        }
        this.setState({search_txt: value});
    };

    deleteItem = id => {
        console.log("deleted item");
        let filterList = this.state.itemList.filter((item) => item.id !== id);
        this.setState({itemList: filterList});

    };


    handleCount = (id,count) => {
        const index = this.state.itemList.findIndex(item => item.id === id);
        this.state.itemList[index].quantity = count;
        console.log(this.state.itemList);

    }

    saveItem = (item) => {
        fetch('/api/fridge/',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                ingredientId: item.id,
                userId: 1,
                quantity: item.quantity,
                expiration: item.expiration
            })
        })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    saveItemList = () => {
        let numItems = 0;
        this.state.itemList.forEach(item => {
            this.saveItem(item);
            numItems += item.quantity;
        });
        this.clear();

        alert(`${numItems} Items Added To Fridge!`);
        this.forceUpdate()
    }

    showIngredientList = () => {
        return this.state.ingredientList.map((item) => {
            return (
                <li key={item.id} className="drop_down_item">
                    <span className="drop_down_icon">
                        <BiFoodMenu/>
                    </span>
                    {" "}{item.name}
                </li>
            )
        });
    }

    render() {
        return (
            <div className="mt-2 drop_down">
                <span className="input_icon"><BsSearch/></span>
                <input
                    className="drop_down_input"
                    type="text"
                    onClick={this.openDropDown}
                    onBlur={this.closeDropDown}
                    placeholder="Search Ingredient"
                    name="city"
                    value={this.state.search_txt}
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <div>
                {this.state.openDD && (
                    <ul className="drop_down_list"
                        onClick={this.onItemClick}
                        onMouseLeave={() => {
                            if (this.state.openDD === true) {
                                this.setState({isOpen: false});
                            }
                        }}
                        onMouseEnter={() => {
                            this.setState({isOpen: true});
                        }}
                    >
                        { this.showIngredientList() }
                    </ul>
                )}
                </div>
                <div className="mt-3">
                    {this.state.itemList.length > 0 ? (
                        <div>
                            <ul className="list-group">
                                {this.state.itemList.map((item, i) => {
                                    return <AddedFridgeItems
                                        key={item.id}
                                        item={item}
                                        count={1}
                                        onClick={this.deleteItem}
                                        handleCount={this.handleCount.bind(this)}
                                    />
                                })}
                            </ul>
                            <button className="btn btn-success w-100 mt-5" onClick={this.saveItemList}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <p>You have not added any ingredients yet!</p>
                    )}
                </div>
            </div>
        );
    }
}

export default ListItems;