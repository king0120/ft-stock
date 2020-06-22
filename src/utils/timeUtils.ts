import { subDays, subMonths, subYears, subHours } from 'date-fns';
export const today = () => new Date().getTime() / 1000;

export const TimeOptions = {
  sixHoursAgo: {
    name: 'Six Hours Ago',
    abbr: '6H',
    resolution: 5,
    from: () => subHours(new Date(), 6).getTime() / 1000,
  },
  oneDayAgo: {
    name: 'One Day Ago',
    abbr: '1D',
    resolution: 30,
    from: () => subDays(new Date(), 1).getTime() / 1000,
  },
  threeDaysAgo: {
    name: 'Three Days Ago',
    abbr: '3D',
    resolution: 30,
    from: () => subDays(new Date(), 3).getTime() / 1000,
  },
  oneWeekAgo: {
    name: 'One Week Ago',
    abbr: '1W',
    resolution: 60,
    from: () => subDays(new Date(), 7).getTime() / 1000,
  },
  oneMonthAgo: {
    name: 'One Month Ago',
    abbr: '1M',
    resolution: 'D',
    from: () => subMonths(new Date(), 1).getTime() / 1000,
  },
  threeMonthsAgo: {
    name: 'Three Months Ago',
    abbr: '3M',
    resolution: 'D',
    from: () => subMonths(new Date(), 3).getTime() / 1000,
  },
  oneYearAgo: {
    name: 'One Year Ago',
    abbr: '1Y',
    resolution: 'D',
    from: () => subYears(new Date(), 1).getTime() / 1000,
  },
  fiveYearsAgo: {
    name: 'Five Years Ago',
    abbr: '5Y',
    resolution: 'W',
    from: () => subYears(new Date(), 5).getTime() / 1000,
  },
};

export type AvailableTimes = keyof typeof TimeOptions;
