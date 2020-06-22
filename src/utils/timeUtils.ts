import { subDays, subMonths, subMinutes } from "date-fns";
import { data } from "cypress/types/jquery";

export const today = () => new Date().getTime()/1000
export const sixHoursAgo = () => subMinutes(new Date(), 360).getTime()/1000
export const oneDayAgo = () => subDays(new Date(), 1).getTime()/1000;
export const threeDaysAgo = () => subDays(new Date(), 3).getTime()/1000;
export const oneWeekAgo = () => subDays(new Date(), 7).getTime()/1000;
export const oneMonthAgo = () => subMonths(new Date(), 1).getTime()/1000;
export const threeMonthsAgo = () => subMonths(new Date(), 3).getTime()/1000;
export const sixMonthsAgo = () => subMonths(new Date(), 6).getTime()/1000;

// 1 day, 1 week, 1 month, 3 month, 1 year, 5 year