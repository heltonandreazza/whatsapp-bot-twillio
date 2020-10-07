# whatsapp-bot-twillio

## setup enviroment variables
1. create .env file with the following keys
```
APIKEY= Google key
CX= Google Search Engine id
SID= Twillio accound SID
KEY= Twillio Auth Token
```
APIKEY= get Google key [here](https://developers.google.com/custom-search/v1/overview#api_key)

CX= create and get you Search Engine id [here](https://cse.google.com/cse/all)

SID= create you account [here](https://www.twilio.com/) and get your accound SID on login -> products -> programable SMS

KEY= create you account [here](https://www.twilio.com/) and get your Auth Token on login -> products -> programable SMS

## how to run

1. download https://ngrok.com/download
2. run ngrok on port 3000
```
./ngrok http 3000
```
3. run npm dependencies
```
npm install
```
4. run node server locally
```
npm start
```

watch demo [here]()
