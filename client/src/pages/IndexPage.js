import React from 'react';
import Loading from '../components/Loading';


class IndexPage extends React.Component {
    state = {
        ingredients: [],
        loading: true,
    }

  componentDidMount() {
        fetch("/api/ingredients")
            //.then(res => res.json())
            .then(res => console.log(res.text()))
            // .then(ingredients => {
            //     console.log("here");
            //     this.setState({
            //         loading: false,
            //         ingredients: ingredients.map(ingredient => { return ingredient.name}),
            //     });
            //     console.log(this.state.ingredients);
            // })
            .catch(err => console.log("API ERROR: ", err));
      }

    render() {
        if(this.state.loading) {
            return <Loading/>;
        }

        return (
            // <div className="container-fluid text-center">
            //     <div className="row justify-content-center">
            //         { this.state.ingredients }
            //     </div>
            // </div>
            <div>
                <p>Index page </p>
            </div>
        )
  }
}

export default IndexPage;