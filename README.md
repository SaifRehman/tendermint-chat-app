## Tendermint Blockchain Chat App
![Tendermint](http://www.peerity.io/images/Tendermint-logo2.png)

This is minimal chat application based on Tendermint Blockchain using Lotionjs in 30 lines of code!. It also includes web/mobile application built using Ionic 3.

### Running the blockchain
1. Navigate to blockchain dir 
```
cd blockchain
```
2. Install dependencies 
```
 npm i 
```
3. Run the Blockchain
``` 
node app.js
```

![3](img/3.png)

Your tendermint port is 46667, and your blockchain server port is 3000

3. Endpoint: http://localhost:3000/state (GET), shows current data in blockchain
4. Endpoint: http://localhost:3000/txs (POST), post new data in blockchain

![4](img/4.png)

End points available through ABCI (Application blockchain interface) :)

How simple can that be?

## Run FrontEnd Mobile Application
1. Navigate to frontend dir
```
cd frontend
```
2. Install dependencies
```
npm i
```
3. Install ionic cli 
```
npm -g ionic cordova
```
4. Run the app
```
ionic serve
```

## Screenshot of App

![5](img/5.png)


![6](img/6.png)


![7](img/7.png)


![8](img/8.png)
