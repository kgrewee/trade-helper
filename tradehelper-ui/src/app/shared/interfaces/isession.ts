import { Exchange } from "../enums/exchange";

export interface ISession {
    id: string;
    name: string;
    exchange: Exchange
}