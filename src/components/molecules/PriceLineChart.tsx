import React, { useState, useContext, useEffect, FC } from 'react';
import fetchStockCandles from '../../services/fetchStockCandles';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import { ActiveCompany } from '../../context/ActiveCompanyContext';

interface PriceLineChartProps {
  width: number,
  height: number
}

const PriceLineChart: FC<PriceLineChartProps> = ({width, height}) => {
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
        margin={{left: 50}}
        height={height * .9} 
        width={width * .9}
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