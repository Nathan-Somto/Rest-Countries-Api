function  DetailsContainer({detailsData,loading,error}) 

{

    const{name,flag,nativeName,topLevelDomain,population,currencies,region,languagues,subregion,capital,borders} = detailsData;

 return(
    <>
    {loading && <h1>loading...</h1>}
    {error && <h1>No result</h1>}
{Array.isArray(detailsData) && <section>
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
                <p>Currencies: <span>money</span></p>
                <p>Capital: <span>{capital}</span> </p>
            </div>
            <div>
                <p>Top Level Domain: <span>htg</span></p>
                <p>region: <span>{region}</span></p>
                <p>Langauges: <span>language</span></p>
            </div>
        </div>
        <p>Border Countries: </p>
    </div>
</section>}
    </>
 )   
}

export default DetailsContainer ;