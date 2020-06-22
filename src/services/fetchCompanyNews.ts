import finnHubInstance from './finnHubClient';
import { format } from 'date-fns';
import { TimeOptions } from '../utils/timeUtils';

export default async function fetchCompanyNews(symbol: string) {
  const { data } = await finnHubInstance.get(`/company-news`, {
    params: {
      symbol,
      from: format(new Date(TimeOptions.oneWeekAgo.from()), 'yyyy-MM-dd'),
      to: format(new Date(), 'yyyy-MM-dd'),
    },
  });
  return data;
}
