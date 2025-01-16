describe("Task 1", () => {
  it("Should be able to create users", () => {
    const requestBody = {
      name: "morpheus",
      job: "leader",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: requestBody,
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.be.equal(requestBody.name);
      expect(response.body.job).to.be.equal(requestBody.job);
    });
  });
});
