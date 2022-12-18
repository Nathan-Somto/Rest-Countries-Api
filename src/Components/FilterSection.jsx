import React from 'react';
import searchIcon from '../search.svg';
function FilterSection({setSearchInput,search,option, setSearchOption}) {   
    
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
    function selectSearch(e){
        setSearchOption('');
        setSearchInput(e.target.value);
    }
    function selectOption(e){
        setSearchInput('');
        setSearchOption(e.target.value);
    }
    return(
        <form  onSubmit ={ (e) => e.preventDefault()} className="FilterSection">

            <label htmlFor="searchbar">
                     <img className ='searchIcon' src = {searchIcon} alt="search icon" /> 
                <input className="searchBar"  value={search} onChange={selectSearch} type="text" placeholder='Search for a Country...' id ="searchbar" />
                </label>
                <label htmlFor="filter">
                    <select onChange ={selectOption} value ={option} id="filter">
                        {filterRegion.map(({id, region})=>{
                            return <option key={id}>{region}</option>}
                        )}
                    </select>
                </label>
        </form>
    )
}

export default FilterSection;