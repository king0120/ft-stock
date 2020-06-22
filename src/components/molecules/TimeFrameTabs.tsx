import React from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/core';
import { oneDayAgo } from 'src/utils/timeUtils';

const times = [
  {
    name: '1d',
    genValue: () => oneDayAgo()
  }, 
  {
    name: '5d',
    genValue: () => oneDayAgo()
  }, 
]
const TimeFrameTabs = () => {
  return (
    <Tabs size="sm">
        <TabList>
          <Tab>1d</Tab>
          <Tab>5d</Tab>
          <Tab>1mo</Tab>
          <Tab>3mo</Tab>
          <Tab>6mo</Tab>
        </TabList>
      </Tabs>
  );
};

export default TimeFrameTabs;