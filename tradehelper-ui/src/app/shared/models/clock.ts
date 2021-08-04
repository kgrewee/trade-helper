import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Clock {
    constructor(
        public timestamp: Date,
        public isOpen: boolean,
        public nextOpen: Date,
        public nextClose: Date
    ) { }
}

@Injectable({
    providedIn: "root"
})
export class ClockAdapter implements Adapter<Clock> {
    /**
     * Adapts item to Alpaca clock
     *
     * @param {*} item Item
     * @return {Clock} Adapted Clock
     */
    adapt(item: any): Clock {
        return new Clock(new Date(item.timestamp), item.isOpen, new Date(item.nextOpen), new Date(item.nextClose));
    }
}