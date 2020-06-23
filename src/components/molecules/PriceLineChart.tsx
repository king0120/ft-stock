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
import { useRealtimePrice } from '../../hooks/useRealTimePrice';
import TimeFrameTabs from './TimeFrameTabs';
import fetchStockCandles from '../../services/fetchStockCandles';

import { Skeleton } from '@chakra-ui/core';
import type { AvailableTimes } from '../../utils/timeUtils';

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
    const [selectedTime, setSelectedTime] = useState<string>('sixHoursAgo');
    const { stockName } = useContext(ActiveCompany);
    const realtimePrice = useRealtimePrice(stockName);

    useEffect(() => {
      setStockCandles([])
      if (selectedTime === 'realTime') {
        return
      }
      fetchStockCandles(stockName, selectedTime as AvailableTimes).then((data) => {
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
    }, [stockName, selectedTime]);

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
      <div>
        <TimeFrameTabs setSelectedTime={setSelectedTime} />
        <Skeleton isLoaded={!!stockCandles.length}>
          <FlexibleXYPlot
            xType="time"
            margin={{ left: 50 }}
            height={height * 0.8}
            width={width}
          >
            <XAxis />
            <YAxis />
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries data={stockCandles} />
          </FlexibleXYPlot>
        </Skeleton>
      </div>
    );
  },
);

export default PriceLineChart;
