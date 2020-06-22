import React from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/core';

const TimeFrameTabs = () => {
  return (
    <Tabs size="sm">
      <TabList>
        <Tab>1d</Tab>
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
