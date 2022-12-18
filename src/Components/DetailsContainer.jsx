import Borders from "../Styles/Borders";
function  DetailsContainer(
    {name,
    flag,
    nativeName,
    topLevelDomain,
    population,
    currencies,
    region,
    languagues,
    subregion,
    capital,
    borders,
    setName
}) 

{
 return(
    <>
    
 <section className="DetailsContainer grid">
    <div className="left">
        <img src={flag} alt={`${name} flag`} />
    </div>
    <div className="right">
        <h1>{name}</h1>
        <div className="extraInfo grid-1x2">
            <div>
                <p>Native name: <span>{nativeName}</span></p>
                <p>population: <span>{population}</span> </p>
                <p>Sub region:  <span>{subregion}</span></p>
                <p>Currencies: <span>{currencies.map(item => `${item.name}`)}</span></p>
                <p>Capital: <span>{capital}</span> </p>
            </div>
            <div>
                <p>Top Level Domain: <span>{topLevelDomain[0]}</span></p>
                <p>region: <span>{region}</span></p>
                <p>Langauges: <span>{languagues.map(language => languagues.indexOf(language) !== languagues.length-1 ?`${language.name}, `: `${language.name}`)}</span></p>
            </div>
        </div>
        <div ><span>Borders: </span> <div className='borderContainer'>{borders && 
        borders.map(border => <Borders key={border}  setName ={setName}  border ={border} ></Borders>)}   </div>
        </div>
        </div>
</section>
    </>
 )   
}

export default DetailsContainer ;