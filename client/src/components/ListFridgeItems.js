import React from "react";
import AddedFridgeItems from "./AddedFridgeItems";
import auth from "../services/auth";


class ListFridgeItems extends React.Component {

    state = {
        itemList: [],
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

    }

    deleteItem = id => {
        // let userId = auth.userInfo.id;
        // let ingredientId = id;
        // fetch(`/api/fridge/${userId}/${ingredientId}/`, {
        //     method: "DELETE"
        // })
        //     .then(res => console.log(res))
        //     .then(() => {
        //         console.log("deleted item");
        //         let filterList = this.state.itemList.filter((item) => item.id !== id);
        //         this.setState({itemList: filterList});
        //     })


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
                            key={item.id}
                            item={item}
                            count={item.quantity}
                            onClick={this.deleteItem}
                            handleCount={this.handleCount.bind(this)}
                        />
                    })}
                </ul>
                <button className="btn btn-success w-100 mt-5" onClick={this.saveItemList}>
                    Save
                </button>
            </div>
        );
    }
}

export default ListFridgeItems;