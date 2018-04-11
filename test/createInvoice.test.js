var should = require('should');
var Easypay = require('../');

describe('Easypay', function() {

  it('should create signature', function() {
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
    console.log(signature);
  })

  it("should check signature. Don't have response examle right now.", function() {
    var check = Easypay.checkSignature({
      order_mer_code,
      sum,
      mer_no,
      card,
      purch_date,
      notify_signature,
      xml_data 
    }, 'secret_key');
    if (check) {
      console.log('True signature');
    } else {
      throw new Error('False signature');
    }
  })

})
