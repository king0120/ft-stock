import { subDays, subMonths, subMinutes, subYears, subHours } from 'date-fns';
export const today = () => new Date().getTime() / 1000;

export const TimeOptions = {
  sixHoursAgo: {
    resolution: 5,
    from: () => subHours(new Date(), 6).getTime() / 1000,
  },
  oneDayAgo: {
    resolution: 30,
    from: () => subDays(new Date(), 1).getTime() / 1000,
  },
  threeDaysAgo: {
    resolution: 30,
    from: () => subDays(new Date(), 3).getTime() / 1000,
  },
  oneWeekAgo: {
    resolution: 60,
    from: () => subDays(new Date(), 7).getTime() / 1000,
  },
  oneMonthAgo: {
    resolution: 'D',
    from: () => subMonths(new Date(), 1).getTime() / 1000,
  },
  threeMonthsAgo: {
    resolution: 'D',
    from: () => subMonths(new Date(), 3).getTime() / 1000,
  },
  oneYearAgo: {
    resolution: 'D',
    from: () => subYears(new Date(), 1).getTime() / 1000,
  },
  fiveYearsAgo: {
    resolution: 'W',
    from: () => subYears(new Date(), 1).getTime() / 1000,
  },
};
