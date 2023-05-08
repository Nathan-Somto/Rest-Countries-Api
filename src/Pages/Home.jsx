import React, { useState, useEffect } from "react";
import FilterSection from "../Components/FilterSection";
import useAxios from "../Hooks/useAxios";
import CountryContainer from "../Components/CountryContainer";
import LoadingSpinner from "../Components/loadingSpinner";
function Home() {
  const { data, loading, error } = useAxios(
    "https://restcountries.com/v2/all?fields=name,flag,capital,region,currency,population"
  );
  const [response, setResponse] = useState([]);
  const [filteredResponse, setFilteredResponse] = useState([]);
  const filtered = filteredResponse.length > 0;
  useEffect(() => {
    if (data.length) {
      setResponse([...data]);
    }
  }, [data]);
  function filterData(search,option) {
    let filteredData = response.filter((item) =>
      search
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : item.region.includes(option)
    );
    setFilteredResponse([...filteredData]);
  }
  return (
    <>
      <FilterSection
       filterData={filterData}
      />
      {loading && <LoadingSpinner />}
      {error && <h1>No result...</h1>}
      <CountryContainer data={!filtered? response: filteredResponse} />
    </>
  );
}

export default Home;
