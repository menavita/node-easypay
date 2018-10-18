var should = require("should");
var Easypay = require("../");

var easypay = new Easypay("11111111", true);

describe("Easypay", function() {
  it("should create signature", function() {
    var signature = easypay.createSignature({
      EP_OrderNo: "12312412",
      EP_Sum: 12.5,
      EP_Expires: 2,
      EP_Comment: "Тест",
      EP_OrderInfo: "Тест",
      EP_Success_URL: "http://mytestshop.by/success/",
      EP_Cancel_Url: "http://mytestshop.by/cancel/",
      EP_Debug: "0"
    });
    console.log(signature);
  });

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
      console.log("True signature");
    } else {
      throw new Error("False signature");
    }
  });

  it("create invoice", function() {
    return easypay
      .createInvoice({
        EP_MerNo: "ok1111",
        EP_OrderNo: "12312412",
        EP_Sum: 12.5,
        EP_Expires: 2,
        EP_Comment: "Тест",
        EP_OrderInfo: "Тест",
        EP_Success_URL: "http://mytestshop.by/success/",
        EP_Cancel_Url: "http://mytestshop.by/cancel/",
        EP_Debug: "0",
        EP_Encoding: "utf-8",
        EP_PayType: "PT_ERIP",
        EP_URL_Type: "link"
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        throw err;
      });
  });

  it("parse notification request body", function() {
    // actual notification from Easypay
    var body = {
      ep_notify_register:
        '<easypay function="ep_notify_register" date="2018-10-17"><invoices count="1" total_sum="118.8.00"><invoice><card>PT_CARD</card><xml_data>additionalxml</xml_data><mer_no>ok1111</mer_no><purch_date>2018-10-17 12:00:00</purch_date><sum>118.80</sum><order_mer_code>1080</order_mer_code></invoice></invoices></easypay>'
    };
    easypay.parseNotification(body)
      .then(function(result) {
        console.log(result.easypay.invoices[0].invoice);
      })
  });
});
