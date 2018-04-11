var crypto = require('crypto');

exports.createSignature = function(params, key) {
  return crypto.createHash('md5')
    .update(params.EP_MerNo + key + params.EP_OrderNo + params.EP_Sum).digest('hex');
}

exports.checkSignature = function(params, key) {
  if (! params.notify_signature) {
    return false;
  }

  var united = params.order_mer_code
    + params.sum
    + params.mer_no
    + params.card
    + params.purch_date
    + key;

  if (params.notify_signature === crypti.createHash('md5').update(united).digest('hex')) {
    return true;
  }
  return false;
}
