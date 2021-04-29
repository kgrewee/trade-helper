import { Exchange } from "../enums/exchange";
import { ISession } from "../interfaces/isession";

export class BinanceSession implements ISession {

    constructor(){
        this.id = "";
        this.name= "";
        this.exchange = Exchange.DEFAULT;
        this.key = "";
        this.secret = "";
    }

    id: string;
    name: string;
    exchange: Exchange;
    key: string;
    secret: string;
}