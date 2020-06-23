import React, { FC, Dispatch } from 'react';
import { Tabs, TabList, Tab, Tooltip } from '@chakra-ui/core';
import { TimeOptions } from '../../utils/timeUtils';

interface TimeFrameTabsProps {
  setSelectedTime: Dispatch<any>
}

const TimeFrameTabs: FC<TimeFrameTabsProps> = ({ setSelectedTime }) => {
  return (
    <Tabs size="sm" defaultIndex={1}>
      <TabList>
        <Tab onClick={() => { setSelectedTime('realTime') }}>
          <Tooltip
            aria-label={'Real Time'}
            label={'Real Time'}
            placement="top"
          >
            RT
          </Tooltip>
        </Tab>
        {Object.entries(TimeOptions).map(([key, value]) => (
          <Tab key={key} onClick={() => { setSelectedTime(key) }}>
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
