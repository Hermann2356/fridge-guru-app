import React, { useState } from "react";

const FiltersBar = ({ state, onChange }) => {


    const { minCal, maxCal, minPro, maxPro, minFats, maxFats, minCarbs, maxCarbs } = state;

    const handleChange = (evt) => {
        onChange({ ...state, [evt.target.name]: evt.target.value });
    }



    return (
        <div>
            <br />
            <div className="row">
                <div>
                    <h5>Calories</h5>
                    <div className="row ">

                        <div className="col-6">
                            <input value={minCal} name="minCal" class="form-control form-control-sm" type="number" placeholder="min" onChange={handleChange} />

                        </div>
                        <div className="col-6">
                            <input value={maxCal} name="maxCal" class="form-control form-control-sm" type="number" placeholder="max" onChange={handleChange} />

                        </div>

                    </div>
                    <br />

                </div>
                <br />
                <div>
                    <h5>Other Filters</h5>
                    <h5>Protiens</h5>
                    <div className="row ">

                        <div className="col-6">
                            <input value={minPro} name="minPro" class="form-control form-control-sm" type="number" placeholder="min" onChange={handleChange} />

                        </div>
                        <div className="col-6">
                            <input value={maxPro} name="maxPro" class="form-control form-control-sm" type="number" placeholder="max" onChange={handleChange} />

                        </div>

                    </div>

                </div>
                <br />

                <div>
                    <h5>Fats</h5>
                    <div className="row ">

                        <div className="col-6">
                            <input value={minFats} name="minFats" class="form-control form-control-sm" type="number" placeholder="min" onChange={handleChange} />

                        </div>
                        <div className="col-6">
                            <input value={maxFats} name="maxFats" class="form-control form-control-sm" type="number" placeholder="max" onChange={handleChange} />

                        </div>

                    </div>

                </div>
                <br />

                <div>
                    <h5>Carbs</h5>
                    <div className="row ">

                        <div className="col-6">
                            <input value={minCarbs} name="minCarbs" class="form-control form-control-sm" type="number" placeholder="min" onChange={handleChange} />

                        </div>
                        <div className="col-6">
                            <input value={maxCarbs} name="maxCarbs" class="form-control form-control-sm" type="number" placeholder="max" onChange={handleChange} />

                        </div>

                    </div>

                </div>



            </div>
            <br />


        </div>
    )

}

export default FiltersBar