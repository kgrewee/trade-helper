import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class AlpacaPosition {
    constructor(
        public assetId: string,
        public symbol: string,
        public exchange: string,
        public assetClass: string,
        public avgEntryPrice: number,
        public qty: number,
        public side: string,
        public marketValue: number,
        public costBasis: number,
        public unrealizedPl: number,
        public unrealizedPlpc: number,
        public unrealizedIntradayPl: number,
        public unrealizedIntradayPlpc: number,
        public currentPrice: number,
        public lastdayPrice: number,
        public changeToday: number
    ) { }
}

@Injectable({
    providedIn: "root"
})
export class AlpacaPositionAdapter implements Adapter<AlpacaPosition> {
    /**
     * Adapts item to Alpaca position
     *
     * @param {*} item Item
     * @return {Account} Adapted Account
     */
    adapt(item: any): AlpacaPosition {
        return new AlpacaPosition(item.assetId, item.symbol, item.exchange, item.assetClass, +Number(item.avgEntryPrice).toFixed(2), item.qty, item.side, item.marketValue, item.costBasis, item.unrealizedPl, +Number(item.unrealizedPlpc).toFixed(2), item.unrealizedIntradayPl, item.unrealizedIntradayPlpc, item.currentPrice, item.lastdayPrice, item.changeToday);
    }
}