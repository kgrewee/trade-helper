# TradeHelper

## License

&copy; 2021 Kyle Grewe

Permission to use this software must be granted by none other than Kyle Grewe himself.  Attempts to copy or redistribute are strictly prohibited.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

All Rights Reserved

## Overview

Make algo-trading easier with a platform to view more descriptive information about your trading activities

## Supported Exchanges

- Alpaca https://alpaca.markets/docs/

## Required Software

- npm & nodeJS https://www.npmjs.com/get-npm
- AngularCLI https://angular.io/cli
- OpenJDK11 https://openjdk.java.net/install/
- Maven https://maven.apache.org/install.html, https://www.baeldung.com/install-maven-on-windows-linux-mac

## Installation

TradeHelper consists of an Angular UI with a Java RestAPI as a data source.  Both projects are found within this repository.

### Backend

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

### Frontend

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

