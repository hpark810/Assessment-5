describe("#snakeToCamel", () => {
  it("passes_standard_cases", function() {
    expect(snakeToCamel("_awesome_sauce")).toBe("AwesomeSauce");
    expect(snakeToCamel("a_man_a_plan")).toBe("aManAPlan");
    expect(snakeToCamel("HOW_ABOUT_NOW?")).toBe("HOWABOUTNOW?");
  });
});
