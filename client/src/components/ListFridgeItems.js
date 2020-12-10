import React from "react";
import AddedFridgeItems from "./AddedFridgeItems";
import auth from "../services/auth";


class ListFridgeItems extends React.Component {

    state = {
        itemList: [],
        deletedList:[],
        loading: true,
    }

    componentDidMount() {
        console.log(this.state.itemList)

        this.setState({
            itemList: this.props.fridgeIngredients,
            loading: false,
        })
    }

    handleCount = (id, count) => {
        const index = this.state.itemList.findIndex(item => item.id === id);
        this.state.itemList[index].quantity = count;
        console.log(this.state.itemList);

        this.updateItem(id);

    }
    updateItem = (id) => {
        let userId = auth.userInfo.id;
        let ingredientId = id;
        let filerItem = this.state.itemList.filter((item) => item.id === id)[0];
        fetch(`/api/fridge/${userId}/${ingredientId}/`, {
            method: "put",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                quantity: filerItem.quantity,
                expiration: filerItem.expiration
            })
        })
            .then(res => console.log(res))
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            })


    }

    deleteItem = (id) => {
        console.log("deleted item");
        console.log(id);

        let filterList = this.state.itemList.filter((item) => item.id !== id);
        console.log(filterList);
        this.setState({itemList: filterList});

        let userId = auth.userInfo.id;
        let ingredientId = id;
        fetch(`/api/fridge/${userId}/${ingredientId}/`, {
            method: "delete"
        })
            .then(res => console.log(res))
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            })


    };

    render() {
        let loading = this.state.loading;
        if (loading) {
            return (<div><p>Loading....</p></div>);
        }
        return (
            <div>
                <ul className="list-group">
                    {this.state.itemList.map((item, i) => {
                        return <AddedFridgeItems
                            defaultExp="true"
                            key={item.id}
                            item={item}
                            count={item.quantity}
                            onClick={this.deleteItem}
                            updateItem={this.updateItem.bind(this)}
                            handleCount={this.handleCount.bind(this)}
                        />
                    })}
                </ul>
            </div>
        );
    }
}

export default ListFridgeItems;