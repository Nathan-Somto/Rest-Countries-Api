import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DetailsContainer from "../Components/DetailsContainer";
import useAxios from "../Hooks/useAxios";
import nameAndCodes from "../Data/countryNamesandCodes";
import backicon from "../Assets/back.svg";
import LoadingSpinner from "../Components/loadingSpinner";

function Details() {
  const { countryname } = useParams();
  const url = `https://restcountries.com/v2/name/${countryname}?fullText=true`;
  const { data, loading, error } = useAxios(url);
  const [response, setResponse] = useState([]);
  const [countryNames, setCountryNames] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    if (data.length) {
      setResponse([...data]);
      let namesOfCountries = [];

      // checks if borders is undefined
      if (data[0].borders) {
        data[0].borders.forEach((border) => {
          let obj = nameAndCodes.filter((item) => item.code === border);
          namesOfCountries.push(obj[0].name);
        });
        setCountryNames([...namesOfCountries]);
      }
    }
    return () => {
      console.log("un mount");
    };
  }, [data, url]);
  /**
   * @todo create a function to pop this page off from the history stack.
   */

  function goBack() {
    Navigate(-1);
  }
  if(loading) return <LoadingSpinner/>;

  return (
    <div className="detailsPage">
      <a className="backIcon" onClick={goBack}>
        <img src={backicon} alt="back icon" /> Back
      </a>
      {error && <h1>there was an error</h1>}
      {response &&
        response.map((item) => (
          <DetailsContainer
            key={`${item.name}-${item.population}`}
            name={item.name}
            flag={item.flag}
            nativeName={item.nativeName}
            topLevelDomain={item.topLevelDomain}
            population={item.population}
            currencies={item.currencies}
            region={item.region}
            languagues={item.languages}
            subregion={item.subregion}
            capital={item.capital}
            borders={countryNames}
          />
        ))}
    </div>
  );
}

export default Details;
