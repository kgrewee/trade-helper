import { Injectable } from "@angular/core";
import { Exchange } from "../enums/exchange";
import { Adapter } from "../models/adapter";

export interface ISession {
    id: string;
    name: string;
    exchange: Exchange
}

export class Session implements ISession {
    constructor(
        public id: string,
        public name: string,
        public exchange: Exchange,
    ) { }
}

@Injectable({
    providedIn: "root"
})
export class SessionAdapter implements Adapter<Session> {
    /**
     * Adapts item to Session
     *
     * @param {*} item Item
     * @return {AlpacaSession} Adapted Session
     */
    adapt(item: any): Session {
        return new Session(item.id, item.name, item.exchange);
    }
}

