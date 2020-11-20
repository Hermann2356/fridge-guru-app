// Import Libraries
import React from "react";
import {Collapse, Card, CardBody} from "reactstrap";
import {FaChevronDown} from "react-icons/fa";
import '../components_stylesheets/FilterItem.css';
import Chili from "../assets/chili.png";


class FilterItem extends React.Component {

      state = {
          isOpen: false,
          ingredients: [
              "Chilli sauce",
              "Cinnamon",
              "Garlic powder",
              "Paprika",
              "Oregano",
              "Red pepper",
              "cumin",
              "cayenne",
              "thyme",
          ]
      };

      componentDidMount() {

      }

    toggle = () => {
       this.setState({
           isOpen: !this.state.isOpen,
       })
    };

    render() {
        return (
            <div className="filter__wrapper">
                <div className="filter__toggle d-flex align-items-center justify-content-between"
                    onClick={this.toggle}>
                    <div>
                        <img src={Chili} alt="filter item image" className="filter__image"/>
                        <span className="filter__item__title ">Spices</span>
                    </div>
                    <div>
                        <FaChevronDown className=""/>
                    </div>
                </div>
                <Collapse isOpen={ this.state.isOpen}>
                    <div className="filter__dropdown py-2">
                        {this.state.ingredients.map(item => {
                            return (
                                <div className="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="checkbox"
                                    />
                                    <label class="form-check-label" for="checkbox">
                                        {item}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </Collapse>
            </div>
        );
   }
};

export default FilterItem;
