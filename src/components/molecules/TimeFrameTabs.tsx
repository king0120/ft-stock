import React, { FC } from 'react';
import { Tabs, TabList, Tab, Tooltip } from '@chakra-ui/core';
import { TimeOptions } from '../../utils/timeUtils';

interface TimeFrameTabsProps {
  setSelectedTime: (s:string) => {}
}

const TimeFrameTabs: FC<TimeFrameTabsProps> = ({setSelectedTime}) => {
  return (
    <Tabs size="sm">
      <TabList>
        {Object.entries(TimeOptions).map(([key, value]) => (
          <Tab key={key} onClick={() => {setSelectedTime(key)}}>
            <Tooltip 
              aria-label={value.name} 
              label={value.name} 
              placement="top"
            >
              {value.abbr}
            </Tooltip>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default TimeFrameTabs;
