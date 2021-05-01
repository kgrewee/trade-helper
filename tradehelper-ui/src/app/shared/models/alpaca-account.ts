import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class AlpacaAccount {
    constructor(
        public id: string,
        public accountNumber: string,
        public status: string,
        public currency: string,
        public cash: number,
        public portfolioValue: number,
        public patternDayTrader: boolean,
        public tradeSuspendedByUser: boolean,
        public tradingBlocked: boolean,
        public transfersBlocked: boolean,
        public accountBlocked: boolean,
        public createdAt: Date,
        public shortingEnabled: boolean,
        public longMarketValue: number,
        public shortMarketValue: number,
        public equity: number,
        public lastEquity: number,
        public multiplier: number,
        public buyingPower: number,
        public initialMargin: number,
        public maintenanceMargin: number,
        public sma: number,
        public daytradeCount: number,
        public lastMaintenanceMargin: number,
        public daytradingBuyingPower: number,
        public regtBuyingPower: number
    ) { }
}

@Injectable({
    providedIn: "root"
})
export class AlpacaAccountAdapter implements Adapter<AlpacaAccount> {
    /**
     * Adapts item to Alpaca account
     *
     * @param {*} item Item
     * @return {Account} Adapted Account
     */
    adapt(item: any): AlpacaAccount {
        return new AlpacaAccount(item.id, item.accountNumber, item.status, item.currency, item.cash, item.portfolioValue, item.patternDayTrader, item.tradeSuspendedByUser, item.tradingBlocked, item.transfersBlocked, item.accountBlocked, new Date(item.createdAt), item.shortingEnabled, item.longMarketValue, item.shortMarketValue, item.equity, item.lastEquity, item.multiplier, item.buyingPower, item.initialMargin, item.maintenanceMargin, item.sma, item.daytradeCount, item.lastMaintenanceMargin, item.daytradingBuyingPower, item.regtBuyingPower);
    }
}