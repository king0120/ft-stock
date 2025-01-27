interface FinnhubCompanyProfile {
  country: string,
  currency: string,
  exchange: string,
  ipo: Date,
  marketCapitalization: number,
  name: string,
  phone: string,
  shareOutstanding: string,
  ticker: string,
  weburl: string,
  logo: string,
  finnhubIndustry:string,
  loading?: boolean
}

interface FinnhubCompanySymbol {
  description: string,
  displaySymbol: string,
  symbol: string
}