export interface Commodity {
    id: number;
    name: string;
    symbol: string;
    lastTradePriceOnly?: number;
    change?: string;
    daysLow?: number;
    daysHigh?: number;
}
