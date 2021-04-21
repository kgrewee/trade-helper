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

**Backend**

1. Start in the repo root directory
2. Navigate to TradeHelper API directory
``` 
cd tradehelper-api/
```
3. Build jar to the target/ directory
``` 
mvn clean install
```
4. Navigate to the target directory
``` 
cd target/
```
5. Run the jar to start the server
``` 
java -jar tradehelper-api-0.0.1-SNAPSHOT.jar
```

**Frontend**

1. Start in the repo root directory
2. Navigate to TradeHelper UI directory
``` 
cd tradehelper-ui
```
3. Install dependencies
``` 
npm install
```
4. Run the frontend and open it in the browser
``` 
ng serve --open
```

