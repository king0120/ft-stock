import React, { useState, useContext, useEffect } from 'react';
import fetchStockCandles from '../../services/fetchStockCandles';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import { ActiveCompany } from '../../context/ActiveCompanyContext';

const PriceLineChart = () => {
  const [data, setData] = useState([])
  const {stockName} = useContext(ActiveCompany);
  useEffect(() => {
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

export default PriceLineChart;