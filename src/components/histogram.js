import titanicData from '../data/titanic.json'
import { Chart } from "react-google-charts";

export default function histogram() {
  let histogramData = [['survivals', 'class']].concat(titanicData.map(({Survived, Pclass}) => {
    let data = []
    if(Number(Survived) !== 0) {
      data = [Survived, Pclass]
    } else {
      data = ''
    }
    return data
  }));

  const hdata = histogramData.filter((element ) => element)

  const hoptions = {
    title: "Total number of survivals per passenger class",
    hAxis: {
      ticks: [1,2,3,4]
    },
    histogram: {
      bucketSize: 0.5
    },
    legend: { position: "none" }
  }

  return (
    <Chart
      chartType="Histogram"
      height="490px"
      loader={<div>Loading Chart</div>}
      data={hdata}
      options={hoptions}
    />
  )
}