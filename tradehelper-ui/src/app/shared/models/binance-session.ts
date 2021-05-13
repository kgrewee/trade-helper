import { Exchange } from "../enums/exchange";
import { ISession } from "../interfaces/isession";
import { Adapter } from "./adapter";

export class BinanceSession implements ISession {
    constructor(
        public id: string,
        public name: string,
        public exchange: Exchange,
        public key: string,
        public secret: string,
    ) { }
}

export class BinanceSessionAdapter implements Adapter<BinanceSession> {
    /**
     * Adapts item to Binance Session
     *
     * @param {*} item Item
     * @return {BinanceSession} Adapted BinanceSession
     */
    adapt(item: any): BinanceSession {
        return new BinanceSession(item.id, item.name, item.exchange, item.key, item.secret);
    }
}