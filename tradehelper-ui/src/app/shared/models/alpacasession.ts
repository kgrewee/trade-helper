import { AlpacaDataType } from "../enums/alpacadatatype";
import { AlpacaEndpointType } from "../enums/alpacaendpointtype";
import { Exchange } from "../enums/exchange";
import { ISession } from "../interfaces/isession";

export class AlpacaSession implements ISession {

    constructor(){
        this.id = "";
        this.name= "";
        this.exchange = Exchange.DEFAULT;
        this.key = "";
        this.secret = "";
        this.endpointType = AlpacaEndpointType.DEFAULT;
        this.dataType =  AlpacaDataType.DEFAULT;
    }
    
    id: string;
    name: string;
    exchange: Exchange;
    key: string;
    secret: string;
    endpointType: AlpacaEndpointType;
    dataType:  AlpacaDataType;
}