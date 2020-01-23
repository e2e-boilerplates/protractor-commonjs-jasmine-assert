const assert = require("assert");

describe("Sandbox", () => {
  it("should be on the sandbox", async () => {
    browser.get("https://e2e-boilerplates.github.io/sandbox/");
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    assert.strictEqual(title, "Sandbox");
    header.getText().then(h => {
      assert.strictEqual(h, "Sandbox");
    });
  });
});
