import React, { useState, useContext, useEffect, FC } from 'react';
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import { useRealtimePrice } from '../../services/priceWebSocket';
import { Tabs, TabList, Tab } from '@chakra-ui/core';
import TimeFrameTabs from './TimeFrameTabs';
import fetchStockCandles from 'src/services/fetchStockCandles';

interface PriceLineChartProps {
  width: number;
  height: number;
}
interface LineChartPoint {
  x: number;
  y: number;
}

const PriceLineChart: FC<PriceLineChartProps> = React.memo(
  ({ width, height }) => {
    const [stockCandles, setStockCandles] = useState<LineChartPoint[]>([]);
    const { stockName } = useContext(ActiveCompany);
    const realtimePrice = useRealtimePrice(stockName);

    useEffect(() => {
      fetchStockCandles(stockName, 'oneDayAgo').then((data) => {
        if (!data.c) {
          return;
        }

        const formatted = [];

        for (let i = 0; i < data.c.length; i++) {
          formatted.push({
            y: data.c[i],
            x: data.t[i] * 1000,
          });
        }
        setStockCandles(formatted);
      });
    }, [stockName]);

    useEffect(() => {
      if (realtimePrice.length) {
        setStockCandles([
          ...stockCandles,
          {
            y: realtimePrice[0]?.p,
            x: realtimePrice[0]?.t,
          },
        ]);
      }
    }, [realtimePrice]);

    return (
      <div className="App">
        <TimeFrameTabs />
        <FlexibleXYPlot
          xType="time"
          margin={{ left: 50 }}
          height={height * 0.8}
          width={width * 0.9}
        >
          <XAxis />
          <YAxis />
          <HorizontalGridLines />
          <VerticalGridLines />
          <LineSeries data={stockCandles} />
        </FlexibleXYPlot>
      </div>
    );
  },
);

export default PriceLineChart;
