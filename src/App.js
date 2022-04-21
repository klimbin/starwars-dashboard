import React, { useState, useEffect } from 'react';
import './App.css';
import AttributesChart from "./components/AttributesChart/AttributesChart";
import AttributesTable from "./components/AttributesTable/AttributesTable";
import Pagination from "./components/Pagination/Pagination";
import { createChartData } from "./utils/createChartData";

function App() {
  const [planets, setPlanets] = useState(null);
  const [page, setPage] = useState(1);
  const [attribute, setAttribute] = useState("population");

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://swapi.dev/api/planets/?page=${page}`;
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Unable to fetch data. ${response.status}`);
      }

      const data = await response.json();
      const sortedPlanets = data.results.sort((a, b) => (a.name).localeCompare(b.name));
      setPlanets(sortedPlanets);
    };

    fetchData();
  }, [page]);

  const renderAttributeSelect = () => {
    return (
      <div className="AttributeSelect">
        <label htmlFor="attributeSelect">Planet Attribute</label>
        <select
          name="attributeSelect"
          id="attributeSelect"
          value={attribute}
          onChange={(event) => setAttribute(event.target.value)}
        >
          <option value="population">Population</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </div>
    );
  };

  const renderDashboard = () => {
    if (!planets) return;

    const chartData = createChartData(planets, attribute);
    return (
      <>
        {renderAttributeSelect()}
        <AttributesChart attribute={attribute} chartData={chartData} />
        <AttributesTable planets={planets} />
        <Pagination pageCount={6} currentPage={page} setPage={setPage} />
      </>
    );
  };

  return (
    <div className="App">
      {renderDashboard()}
    </div>
  );
}

export default App;
