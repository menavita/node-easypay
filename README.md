# node-easypay
Node module for [Easypay API.](https://ssl.easypay.by/light/)

```javascript
var Easypay = require('node-easypay');

var easypay = new Easypay('web_key');
```
For tests pass true as second param.
## Functions
Currently SOAP is not implemented.

### Create invoice. Return res object.
```javascript
easypay.createInvoice({
  'EP_MerNo': 'ok1111'
  'EP_OrderNo': '12312412',
  'EP_Sum': 12.50,
  'EP_Expires': 2,
  'EP_Comment': 'Тест',
  'EP_OrderInfo': 'Тест',
  'EP_Success_URL': 'http://mytestshop.by/success/',
  'EP_Cancel_Url': 'http://mytestshop.by/cancel/',
  'EP_Debug': '0'
})
.then(function(res) {
  ...
})
.catch(function(err) {
  ...
})
```

### Create signature. Return signature as string.
```javascript
var signature = easypay.createSignature({
  'EP_OrderNo': '12312412',
  'EP_Sum': 12.50,
  'EP_Expires': 2,
  'EP_Comment': 'Тест',
  'EP_OrderInfo': 'Тест',
  'EP_Success_URL': 'http://mytestshop.by/success/',
  'EP_Cancel_Url': 'http://mytestshop.by/cancel/',
  'EP_Debug': '0'
}, 'secret_key');
```

### Check signature. Return boolean value.
```javascript
easypay.checkSignature(params_from_easypay, 'secret_key');
```

### Parse notification JSON response that contains XML
```javascript
easpay.parseResponse(body)
  .then(function(result) {
    ...
  })
  .catch(function(err) {
    ...
  })
```

## Tests
```bash
npm run test
```
## License
MIT
