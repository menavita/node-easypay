# node-easypay
Node module for Easypay API.

```javascript
var Easypay = require('node-easypay');

var easypay = new Easypay({ EP_MerNo: 'ok6666', web_key: '11111111' });

```
## Functions
Currently SOAP is not implemented.

### Create invoice
```javascript
easypay.createInvoice({
  'EP_OrderNo': '12312412',
  'EP_Sum': 12.50,
  'EP_Expires': 2,
  'EP_Comment': 'Тест',
  'EP_OrderInfo': 'Тест',
  'EP_Success_URL': 'http://mytestshop.by/success/',
  'EP_Cancel_Url': 'http://mytestshop.by/cancel/',
  'EP_Debug': '0',
  'EP_Encoding': 'utf-8'
}).then(function(res) {
  console.log(res);
}).catch(function(err) { 
  throw err;
})
```

## Tests
```bash
npm run test
```
## License
MIT
