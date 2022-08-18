import titanicData from '../data/titanic.json'
import { Chart } from "react-google-charts";
export default function lineGraph() {

  const sortedData = titanicData.slice().sort((a,b) => a.Age - b.Age);
  let data = [['Age','Fare']].concat(sortedData.map( ({Age, Fare}) => {
    let graphData = []
    if(Age !== '') {
      graphData = [Number(Age), Number(Fare)]
    } else {
      graphData = ''
    }
    return graphData
  }));
  const tdata = data.filter((element ) => element)
  const options = {
    series: {
      0: { axis: "Fare" }
    },
    axes: {
      y: {
        Fare: { label: "Fare" }
      },
    }
  }

  return (
    <Chart
      className="lineGraph"
      chartType="Line"
      height="400px"
      loader={<div>Loading Chart</div>}
      data={tdata}
      options={options}
    />
  )
}