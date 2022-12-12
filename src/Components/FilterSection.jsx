import React from 'react';
function FilterSection({setSearchInput,search}) {   
    
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
        <form  onSubmit ={ (e) => e.preventDefault()} className="FilterSection">
            <label htmlFor="searchbar">
                <input className="searchBar"  value={search} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Search for a Country...' id ="searchbar" />
                </label>
                <label htmlFor="filter">
                    <select onChange ={(e)=>setSearchInput(e.target.value)} value ="filter" id="filter">
                        {filterRegion.map(({id, region})=>{
                            return <option key={id}>{region}</option>}
                        )}
                    </select>
                </label>
        </form>
    )
}

export default FilterSection;