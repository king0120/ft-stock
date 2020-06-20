import { subDays, subMonths } from "date-fns";

export const today = new Date().getTime()/1000
export const oneDayAgo = subDays(new Date(), 1).getTime()/1000;
export const threeDaysAgo = subDays(new Date(), 3).getTime()/1000;
export const oneWeekAgo = subDays(new Date(), 7).getTime()/1000;
export const oneMonthAgo = subMonths(new Date(), 1).getTime()/1000;
export const threeMonthsAgo = subMonths(new Date(), 3).getTime()/1000;
export const sixMonthsAgo = subMonths(new Date(), 6).getTime()/1000;