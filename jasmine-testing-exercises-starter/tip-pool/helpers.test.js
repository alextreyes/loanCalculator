describe("Utilities test (with setup and tear-down)", function () {
  beforeEach(function () {
    billAmtInput.value = 20;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should sum total tip amount of all payments", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(10);

    billAmtInput.value = 30;
    tipAmtInput.value = 15;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(25);
  });

  it("should sum tip percent of a single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(50, 10)).toEqual(20);
    expect(calculateTipPercent(75, 15)).toEqual(20);
  });

  it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
