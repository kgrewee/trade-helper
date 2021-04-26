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

- NodeJS https://nodejs.org/en/download/
- npm https://www.npmjs.com/get-npm
- AngularCLI https://angular.io/cli
- OpenJDK11 https://openjdk.java.net/install/
- Maven https://maven.apache.org/install.html, https://www.baeldung.com/install-maven-on-windows-linux-mac

## Installation

TradeHelper consists of an Angular UI with a Java RestAPI as a data source.  Both projects are found within this repository.

### Properties

TradeHelper's RestAPI requires various properties files to function.  If they are not created, the backend will fail build tests.
```
- alpaca.properties
- polygon.properties
```

**Properties files must be in src/main/resources**

1. Navigate to src/main/resources and create a copy of the templates for each properties file
2. Rename and fill with your credentials
3. Properties files are copied to the same directory as the jar when performing an install
4. The jar reads the properties files every rest call to allow users to change credentials without restarting the application

### RestAPI

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

