import React from 'react';


const {getRecipeByIngredients} = require('../spoonacular/endpoints');

class IndexPage extends React.Component {
    state = {
        recipes: [],
        ingredients: [],
        loading: true,
    }

    componentDidMount() {
        let ingredients = ['broccoli', 'chicken', 'asparagus']

        getRecipeByIngredients(ingredients)
            .then(res => {
                return res.json();
            })
            .then(recipes => {
                console.log(recipes);
                this.setState({
                    loading: false,
                    recipes: recipes.map(recipe => {
                        return recipe.title;
                    })
                })
            })

    }

    render() {
        if (this.state.loading) {

        }


        return (
            // <div className="container-fluid text-center">
            //     <div className="row justify-content-center">
            //         { this.state.ingredients }
            //     </div>
            // </div>
            <div>
                <ul>
                    {this.state.recipes.join(" | ")}
                </ul>
            </div>
        )
    }
}

export default IndexPage;