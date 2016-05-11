export class Commodity {
  constructor(
    public id: number,
    public name: string,
    public symbol: string,
    public lastTradePrice?: number,
    public change?: string,
    public daysLow?: number,
    public daysHigh?: number
  ) {  }
}

/*
  id: 1,
  name: 'Alphabet Inc.',
  symbol: 'GOOG',
  lastTradePrice: 719.50,
  change: '+6.60',
  daysLow: 715.72,
  daysHigh: 721.35
*/