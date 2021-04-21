# TradeHelper

## License

## Overview

Make algo-trading easier with a platform to view more descriptive information about your trading activities

## Supported Exchanges

Alpaca

## Required Software

- npm
- AngularCLI
- nodeJS
- OpenJDK11
- Maven

## Installation

TradeHelper consists of an Angular UI with a Java RestAPI as a data source.  Both projects are found within this repository.

Backend

1. Start in the repo root directory
2. **cd tradehelper-api/** Navigate to TradeHelper API directory
3. **mvn clean install** Build jar to the target/ directory
4. **cd target/** Navigate to the target directory
5. **java -jar tradehelper-api-0.0.1-SNAPSHOT.jar** Run the jar to start the server

Frontend
1. Start in the repo root directory
2. **cd tradehelper-ui** Navigate to TradeHelper UI directory
3. **npm install** Install dependencies
4. **ng serve --open** Run the frontend and open it in the browser

