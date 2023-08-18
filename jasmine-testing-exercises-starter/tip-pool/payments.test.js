describe("Payment test", function () {
  beforeEach(function () {
    billAmtInput.value = 1;
    tipAmtInput.value = 1;
    paymentTotal = 10;
    numberOfPayments = 1;
    summaryTds.innerHTML = "";
    appendPaymentTable = jasmine.createSpy();
    updateServerTable = jasmine.createSpy();
    updateSummary = jasmine.createSpy();
  });

  it("should Add a curPayment object to allPayments, update html and reset input values ", function () {
    const evt = new Event("submit");
    submitPaymentInfo(evt);
    expect(appendPaymentTable).toHaveBeenCalled();
    expect(updateServerTable).toHaveBeenCalled();
    expect(updateSummary).toHaveBeenCalled();

    expect(billAmtInput.value).toBe("");
    expect(tipAmtInput.value).toBe("");
  });

  it("should create a current payment", function () {
    let a = createCurPayment();
    expect(a).toEqual({
      billAmt: "1",
      tipAmt: "1",
      tipPercent: 100,
    });
  });

  it("should create a table row element and pass to appendTd with input value", function () {
    const curPayment = {
      billAmt: 100,
      tipAmt: 20,
      tipPercent: 20,
    };
    appendPaymentTable(curPayment);

    expect(paymentTbody.children.length).toBe(0);
  });

  it("Should Create table row element and pass to appendTd with calculated sum of all payment ", function () {});

  afterEach(function () {
    paymentTbody.children.innerHTML = "";
    summaryTds = "";
    paymentTbody.innerHTML = "";
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTotal = "";
    numberOfPayments = "";
  });
});
