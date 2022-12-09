import React from 'react';
function FilterSection({Theme,setData}) {
    // to find a country use  the name in the filter method
    // filter based on the region for the drop down
    // change the items in the country card component
    const filterRegion =[
        {
            id:0,
            region:'Filter by region'
        },
        {
        id : 1,
        region:'Africa'
        },
        {
            id: 2,
            region:'Asia'
        },
        {
            id: 3,
            region:'Oceania'
        },
        {
            id: 4,
            region:'Americas'
        },
        {
            id:5,
            region: 'Europe'
        }
    ];
    return(
        <form>
            <label htmlFor="searchbar">
                <input type="text" placeholder='Search for a Country...' id ="searchbar" />
                </label>
                <label htmlFor="filter">
                    <select name="" id="filter">
                        {filterRegion.map(({id, region})=>{
                            return <option key={id}>{region}</option>
                        })}
                    </select>
                </label>
        </form>
    )
}

export default FilterSection;