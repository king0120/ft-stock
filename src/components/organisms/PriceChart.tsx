import React, { useState, useEffect, useContext } from 'react';
import {XYPlot, LineSeries, HorizontalGridLines, XAxis, YAxis, FlexibleXYPlot, LineMarkSeries, VerticalGridLines, Crosshair} from 'react-vis';
import fetchStockCandles from 'src/services/fetchStockCandles';
import { StockSymbolContext } from 'src/App';

const PriceChart = () => {
  const [data, setData] = useState([])
  const {stockName} = useContext(StockSymbolContext);
  useEffect(() => {
    console.log("Fetching For", stockName)
    fetchStockCandles(stockName).then((rawPrices) => {
      const formatted = []
      for (let i = 0; i < rawPrices.c.length; i++) {
        formatted.push({
          y: rawPrices.c[i],
          x: rawPrices.t[i] * 1000
        })
      }
      return formatted
    }).then(prices => setData(prices))
  }, [stockName])
  console.log(data)
  return (
    <div className="App">
      <FlexibleXYPlot
        xType="time"
        margin={{left: 100}}
        height={300} 
        width={550}
      >
        <XAxis />
        <YAxis />
        <HorizontalGridLines />
        <VerticalGridLines />
        <LineSeries data={data} />
      </FlexibleXYPlot>
    </div>
  );
};

export default PriceChart;