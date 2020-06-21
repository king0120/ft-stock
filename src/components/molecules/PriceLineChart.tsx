import React, { useState, useContext, useEffect, FC } from 'react';
import fetchStockCandles from '../../services/fetchStockCandles';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import { ActiveCompany } from '../../context/ActiveCompanyContext';

interface PriceLineChartProps {
  width: number,
  height: number
}

const PriceLineChart: FC<PriceLineChartProps> = ({ width, height }) => {
  const [data, setData] = useState([])
  const { stockCandles } = useContext(ActiveCompany);
  useEffect(() => {
    if (!stockCandles.c) {return}

    const formatted = []

    for (let i = 0; i < stockCandles.c.length; i++) {
      formatted.push({
        y: stockCandles.c[i],
        x: stockCandles.t[i] * 1000
      })
    }
    setData(formatted)
  }, [stockCandles])
  return (
    <div className="App">
      <FlexibleXYPlot
        xType="time"
        margin={{ left: 50 }}
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