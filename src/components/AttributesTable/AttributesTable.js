import React from 'react';
import './AttributesTable.css';
import { formatNumberString } from "../../utils/formatNumberString";

function AttributesTable({planets}) {
  const renderHeader = () => {
    return (
      <tr>
        <th className="left">Name</th>
        <th>Population</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Surface Water</th>
      </tr>
    );
  };

  const renderRow = (planet, index) => {
    const {
      name,
      population,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      surface_water,
    } = planet;

    return (
      <tr key={`planet-${index}`}>
        <td className="left">{name}</td>
        <td>{formatNumberString(population)}</td>
        <td>{formatNumberString(rotation_period)}</td>
        <td>{formatNumberString(orbital_period)}</td>
        <td>{formatNumberString(diameter)}</td>
        <td>{climate}</td>
        <td>{formatNumberString(surface_water)}</td>
      </tr>
    );
  };

  const renderPlanets = (planets) => {
    return planets.map((planet, index) => renderRow(planet, index));
  };

  return (
    <table className="AttributesTable">
      <thead>
        {renderHeader()}
      </thead>
      <tbody className="TableBody">
        {renderPlanets(planets)}
      </tbody>
    </table>
  );
}

export default AttributesTable;
