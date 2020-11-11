import React from 'react';
import Loading from '../components/Loading';


class IndexPage extends React.Component {
    state = {
        ingredients: [],
        loading: true,
    }

  componentDidMount() {
        fetch("/api/ingredients")
            .then(res => res.json())
            .then(ingredients => {
                this.setState({
                    loading: false,
                    ingredients: ingredients.map((i, ii) => <ingredient {...i} key={ii} />),
                });
            })
            .catch(err => console.log("API ERROR: ", err));
      }

    render() {
        if(state.loading) {
            return <Loading/>;
        }

        return (
            <div className="container-fluid text-center">
                <div className="row justify-content-center">
                    { this.state.ingredients }
                </div>
            </div>
        )
  }
}