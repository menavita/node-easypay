var crypto = require('crypto');
var Iconv = require('iconv').Iconv;
var Q = require('q');
var request = require('request');
var parseXMLString = require('xml2js').parseString;

function Easypay(web_key, test) {
  this.url = test ? 'https://ssl.easypay.by/test/client_weborder.php' : 'https://ssl.easypay.by/weborder/';
  this.web_key = web_key;
}

Easypay.prototype.createSignature = function(params) {
  return crypto.createHash('md5')
    .update(params.EP_MerNo + this.web_key + params.EP_OrderNo + params.EP_Sum).digest('hex');
}

Easypay.prototype.checkSignature = function(params) {
  if (! params.notify_signature) {
    return false;
  }

  var united = params.order_mer_code
    + params.sum
    + params.mer_no
    + params.card
    + params.purch_date
    + this.web_key;

  if (params.notify_signature === crypto.createHash('md5').update(united).digest('hex')) {
    return true;
  }
  return false;
}

Easypay.prototype.createInvoice = function(params) {
  var d = Q.defer();

  var body = {
    'EP_MerNo': params.EP_MerNo,
    'EP_OrderNo': params.EP_OrderNo,
    'EP_Sum': params.EP_Sum,
    'EP_Expires': params.EP_Expires,
    'EP_Comment': params.EP_Comment,
    'EP_OrderInfo': params.EP_OrderInfo,
    'EP_Hash': this.createSignature(params),
    'EP_Success_URL': params.EP_Success_URL,
    'EP_Cancel_Url': params.EP_Cancel_Url,
    'EP_Url_Type': params.EP_Url_Type,
    'EP_Debug': params.EP_Debug,
    'EP_Encoding': params.EP_Encoding || 'utf-8',
    'EP_Xml': params.EP_Xml,
    'EP_PayType': params.EP_PayType
  };

  request.post({
    uri: this.url,
    form: body,
    encoding: 'binary'
  }, function(err, res, body) {
    if (err) d.reject(err);
    if (body) {
      var buffer = new Buffer(body, 'binary');
      var iconv = new Iconv('windows-1251', 'utf-8');
      res.body = iconv.convert(buffer, 'binary').toString();
    }
    d.resolve(res);
  })

  return d.promise;
}

Easypay.prototype.parseNotification = function(body) {
  return new Promise(function(resolve, reject) {
    if (!body.ep_notify_register) reject(new Error('ep_notify_register not found in request body'));
    parseXMLString(body.ep_notify_register, function(err, result) {
      if (err) reject(err);
      resolve(result);
    })
  })
}

module.exports = Easypay;
