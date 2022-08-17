import titanicData from '../data/titanic.json'
import { Chart } from "react-google-charts";
export default function lineGraph() {

  titanicData.sort((a,b) => a.Age - b.Age);
  let data = [['Age','Fare']].concat(titanicData.map( ({Age, Fare}) => {
    if(Age != '') {
      return [Number(Age), Number(Fare)]
    }
  }));

  const tdata = data.filter((element ) => element !== undefined)

  const options = {
    series: {
      0: { axis: "Fare" }
    },
    axes: {
      y: {
        Fare: { label: "Fare" }
      },
    },
    legend: { position: "none" },
  }

  return (
    <Chart
          width="80%"
          height="400px"
          chartType="Line"
          loader={<div>Loading Chart</div>}
          data={tdata}
          options={options}
      />
  )
}