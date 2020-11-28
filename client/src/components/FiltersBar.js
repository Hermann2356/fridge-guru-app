import React , { useState} from "react";

const FiltersBar = ({handleFilters , handleCalories}) => {

    const [minCal , setMinCal] = useState('')
    const [maxCal , setMaxCal] = useState('')
    const [minPro , setMinPro] = useState('')
    const [maxPro , setMaxPro] = useState('')
    const [minFats , setMinFats] = useState('')
    const [maxFats , setMaxFats] = useState('')
    const [minCarbs , setMinCarbs] = useState('')
    const [maxCarbs , setMaxCarbs] = useState('')

    const handleChange = (evt) => {
        if(evt.target.name === "minCal" || evt.target.name ===  "maxCal"){
            console.log(evt.target.name)

            evt.target.name === "minCal" ? setMinCal(evt.target.value) : setMaxCal(evt.target.value)
            console.log(minCal , maxCal)

        }
        if(evt.target.name === "minPro" || evt.target.name ===  "maxPro"){
            console.log(evt.target.name)
            evt.target.name === "minPro" ? setMinPro(evt.target.value) : setMaxPro(evt.target.value)
            console.log(minPro , maxPro)

        }
        
        if(evt.target.name === "minFats" || evt.target.name ===  "maxFats"){
            console.log(evt.target.name)
            evt.target.name === "minFats" ? setMinFats(evt.target.value) : setMaxFats(evt.target.value)
            console.log(minFats , maxFats)

        }

        if(evt.target.name === "minCarbs" || evt.target.name ===  "maxCarbs"){
            console.log(evt.target.name)
            evt.target.name === "minCarbs" ? setMinCarbs(evt.target.value) : setMaxCarbs(evt.target.value)
            console.log(minCarbs , maxCarbs)

        }
    }

    const handleSubmitCalories = () => {
        handleCalories({
                minCal,
                maxCal
            })
    }

    const handleSubmit = () => {
        console.log(minCal , maxCal)
        console.log(minPro , maxPro)
        console.log(minFats , maxFats)
        console.log(minCarbs , maxCarbs)
        handleFilters({
            pro : {
                minPro,
                maxPro

            },
            fats: {
                minFats,
                maxFats
            },
            carbs : {
                minCarbs,
                maxCarbs
            }
        })

        setMinPro('')
        setMaxPro('')
        setMinFats('')
        setMaxFats('')
        setMinCarbs('')
        setMaxCarbs('')
    }


    return(
        <div> 
            <br />
            <div className = "row container">
                <div>
                    <h5>Calories</h5>
                    <div className = "row ">
                    
                        <div className = "col-6">
                        <input value = {minCal} name = "minCal"  class="form-control form-control-sm" type="number" placeholder="min"  onChange = {handleChange} />

                        </div>
                        <div className = "col-6">
                        <input value = {maxCal} name = "maxCal"  class="form-control form-control-sm" type="number" placeholder="max" onChange = {handleChange} />

                        </div>

                    </div>
                    <br />
                    <button onClick = {handleSubmitCalories} className = "btn btn-sm btn-success" >Apply Calories</button>

                </div>
                <br />
                <div>
                    <h5>Other Filters</h5>
                    <h5>Protiens</h5>
                    <div className = "row ">
                    
                        <div className = "col-6">
                        <input value = {minPro} name = "minPro"  class="form-control form-control-sm" type="number" placeholder="min"  onChange = {handleChange} />

                        </div>
                        <div className = "col-6">
                        <input value = {maxPro} name = "maxPro"  class="form-control form-control-sm" type="number" placeholder="max"  onChange = {handleChange} />

                        </div>

                    </div>

                </div>
                <br />

                <div>
                    <h5>Fats</h5>
                    <div className = "row ">
                    
                        <div className = "col-6">
                        <input value = {minFats} name = "minFats"  class="form-control form-control-sm" type="number" placeholder="min" onChange = {handleChange}  />

                        </div>
                        <div className = "col-6">
                        <input value = {maxFats} name = "maxFats"  class="form-control form-control-sm" type="number" placeholder="max"  onChange = {handleChange} />

                        </div>

                    </div>

                </div>
                <br />

                <div>
                    <h5>Carbs</h5>
                    <div className = "row ">
                    
                        <div className = "col-6">
                        <input value = {minCarbs} name = "minCarbs"  class="form-control form-control-sm" type="number" placeholder="min"  onChange = {handleChange} />

                        </div>
                        <div className = "col-6">
                        <input value = {maxCarbs} name = "maxCarbs"  class="form-control form-control-sm" type="number" placeholder="max"  onChange = {handleChange} />

                        </div>

                    </div>

                </div>
                
                

            </div>
            <br />
            {
                minPro === '' || maxPro === '' || minCarbs === '' || maxCarbs === '' || minFats === '' || maxFats === '' ?  <button disabled   onClick = {handleSubmit} className = "btn btn-sm btn-success "  >Apply Filters</button> : <button   onClick = {handleSubmit} className = "btn btn-sm btn-success "  >Apply Filters</button>
            }
            
        </div>
    )

}

export default FiltersBar