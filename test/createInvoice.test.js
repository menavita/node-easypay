var should = require('should');
var Easypay = require('../');

var easypay = new Easypay('11111111', true);

describe('Easypay', function() {

  it('should create signature', function() {
    var signature = easypay.createSignature({
      'EP_OrderNo': '12312412',
      'EP_Sum': 12.50,
      'EP_Expires': 2,
      'EP_Comment': 'Тест',
      'EP_OrderInfo': 'Тест',
      'EP_Success_URL': 'http://mytestshop.by/success/',
      'EP_Cancel_Url': 'http://mytestshop.by/cancel/',
      'EP_Debug': '0'
    });
    console.log(signature);
  })

  it("should check signature. Don't have response examle right now.", function() {
    var check = easypay.checkSignature({
      order_mer_code,
      sum,
      mer_no,
      card,
      purch_date,
      notify_signature,
      xml_data 
    });
    if (check) {
      console.log('True signature');
    } else {
      throw new Error('False signature');
    }
  })

  it('create invoice', function() {
    return easypay.createInvoice({
      'EP_MerNo': 'ok1111',
      'EP_OrderNo': '12312412',
      'EP_Sum': 12.50,
      'EP_Expires': 2,
      'EP_Comment': 'Тест',
      'EP_OrderInfo': 'Тест',
      'EP_Success_URL': 'http://mytestshop.by/success/',
      'EP_Cancel_Url': 'http://mytestshop.by/cancel/',
      'EP_Debug': '0',
      'EP_Encoding': 'utf-8',
      'EP_PayType': 'PT_ERIP',
      'EP_URL_Type': 'link'
    }).then(function(res) {
      console.log(res);
    }).catch(function(err) { 
      throw err;
    })
  })

})
