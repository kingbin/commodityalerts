export interface Commodity {
    id: number;
    Name: string;
    symbol: string;
    LastTradePriceOnly?: number;
    Change?: string;
    DaysLow?: number;
    DaysHigh?: number;
}