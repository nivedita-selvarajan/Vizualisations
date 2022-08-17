import titanicData from '../data/titanic.json'
import { Chart } from "react-google-charts";

export default function histogram() {
  let histogramData = [['Number of Survivals', 'Passenger class']].concat(titanicData.map(({Survived, Pclass}) => {
    if(Survived != 0) {
      return [Survived, Pclass]
    }
  }));

  const hdata = histogramData.filter((element ) => element !== undefined)

  const hoptions = {
    hAxis: {
      ticks: [1,2,3,4],
      minTextSpacing: 1
    },
    bar: { gap: 0 },
    histogram: {
      bucketSize: 0.5,
      hideBucketItems: true
    },
    colors: ['#e7711c'],
    legend: { position: "none" }
  }

  return (
    <Chart
      chartType="Histogram"
      width="90%"
      height="400px"
      data={hdata}
      options={hoptions}
    />
  )
}