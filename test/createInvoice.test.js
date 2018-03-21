var should = require('should');
var Easypay = require('../');

var easypay = new Easypay({ EP_MerNo: 'ok6666', web_key: '11111111' }, true);

describe('Easypay', function() {

  it('create invoice', function() {
    return easypay.createInvoice({
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
  })

})
