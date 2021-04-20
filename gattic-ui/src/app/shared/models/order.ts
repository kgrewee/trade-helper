import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Order {
    constructor(
        public id: string,
        public clientOrderId: string,
        public createdAt: any,
        public updatedAt: any,
        public submittedAt: any,
        public filledAt: any,
        public expiredAt: any,
        public canceledAt: any,
        public failedAt: any,
        public replacedAt: any,
        public replacedBy: any,
        public replaces: any,
        public assetId: string,
        public symbol: string,
        public assetClass: string,
        public qty: number,
        public filledQty: number,
        public type: string,
        public side: string,
        public timeInForce: string,
        public limitPrice: number,
        public stopPrice: number,
        public filledAvgPrice: number,
        public status: string,
        public extendedHours: boolean,
        public legs: any
    ) { }
}

@Injectable({
    providedIn: "root"
})
export class OrderAdapter implements Adapter<Order> {
    /**
     * Adapts item to Alpaca order
     *
     * @param {*} item Item
     * @return {Order} Adapted Order
     */
    adapt(item: any): Order {
        return new Order(item.id, item.clientOrderId, item.createdAt, item.updatedAt, item.submittedAt, item.filledAt, item.expiredAt, item.canceledAt, item.failedAt, item.replacedAt, item.replacedBy, item.replaces, item.assetId, item.symbol, item.assetClass, item.qty, item.filledQty, item.type, item.side, item.timeInForce, item.limitPrice, item.stopPrice, item.filledAvgPrice, item.status, item.extendedHours, item.legs);
    }
}