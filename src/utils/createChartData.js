export function createChartData(planets, attribute) {
  return planets.map((planet) => {
    let item = {};
    item.name = planet.name;
    item[attribute] = planet[attribute] === "unknown" ? -1 : Number(planet[attribute]);
    return item;
  });
}