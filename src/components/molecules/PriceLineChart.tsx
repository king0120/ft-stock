import React, { useState, useContext, useEffect, FC } from 'react';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import { useRealtimePrice } from '../../services/priceWebSocket';
import { Tabs, TabList, Tab } from '@chakra-ui/core';
import TimeFrameTabs from './TimeFrameTabs';

interface PriceLineChartProps {
  width: number,
  height: number
}
interface LineChartPoint {
  x: number,
  y: number
}

const PriceLineChart: FC<PriceLineChartProps> = React.memo(({ width, height }) => {
  const [data, setData] = useState<LineChartPoint[]>([])
  const { stockCandles, stockName } = useContext(ActiveCompany);
  const realtimePrice = useRealtimePrice(stockName)

  useEffect(() => {
    if (realtimePrice.length) {
      setData([...data, {
        y: realtimePrice[0]?.p,
        x: realtimePrice[0]?.t
      }])
    }
  }, [realtimePrice])

  useEffect(() => {
    if (!stockCandles.c) { return }

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
      <TimeFrameTabs />
      <FlexibleXYPlot
        xType="time"
        margin={{ left: 50 }}
        height={height * .8}
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
});

export default PriceLineChart;