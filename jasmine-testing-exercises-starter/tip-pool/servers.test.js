describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("Create a table row element and pass to appendTd function with input value()", function () {
    updateServerTable();
    expect(document.querySelectorAll("#serverTable tr").length).toEqual(1);
  });

  afterEach(function () {
    serverTbody.innerHTML = "";
    allServers = {};
    serverId = 0;
    // teardown logic
  });
});
