# node-easypay
Node module for [Easypay API.](https://ssl.easypay.by/light/)

```javascript
var Easypay = require('node-easypay');
```
## Functions
Currently SOAP is not implemented.

### Create signature. Return signature as string.
```javascript
var signature = Easypay.createSignature({
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
Easypay.checkSignature(params_from_easypay, 'secret_key');
```

## Tests
```bash
npm run test
```
## License
MIT
