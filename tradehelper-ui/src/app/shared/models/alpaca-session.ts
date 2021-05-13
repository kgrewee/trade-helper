import { AlpacaDataType } from "../enums/alpacadatatype";
import { AlpacaEndpointType } from "../enums/alpacaendpointtype";
import { Exchange } from "../enums/exchange";
import { ISession } from "../interfaces/isession";
import { Adapter } from "./adapter";

export class AlpacaSession implements ISession {
    constructor(
        public id: string,
        public name: string,
        public exchange: Exchange,
        public key: string,
        public secret: string,
        public apiType: AlpacaEndpointType,
        public dataType: AlpacaDataType
    ) { }
}

export class AlpacaSessionAdapter implements Adapter<AlpacaSession> {
    /**
     * Adapts item to Alpaca Session
     *
     * @param {*} item Item
     * @return {AlpacaSession} Adapted AlpacaSession
     */
    adapt(item: any): AlpacaSession {
        return new AlpacaSession(item.id, item.name, item.exchange, item.key, item.secret, item.apiType, item.dataType);
    }
}

