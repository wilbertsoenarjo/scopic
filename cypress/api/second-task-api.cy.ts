describe("Task 2", () => {
  it("Should be able to follow card scenario", () => {
    // Create a new deck
    cy.request({
      method: "GET",
      url: " https://www.deckofcardsapi.com/api/deck/new/?deck_count=1",
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true;
      expect(response.body.remaining).to.be.equal(52);
      const deckId = response.body.deck_id;

      // Sort the deck
      const suitOrder = ["S", "D", "C", "H"];
      const numberOrder = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "J",
        "Q",
        "K",
      ];
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;

        // Assertion to make sure deck is sorted
        const sortedDeckOrder = suitOrder
          .map((suit) => numberOrder.map((number) => `${number}${suit}`))
          .flat();
        const allCards = response.body.cards.flat().map((card) => card.code);

        expect(sortedDeckOrder).to.deep.equal(allCards);
      });

      // Create a pile of 5 cards
      const firstPile = "AS,2S,3S,4S,5S";
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/firstPile/add/?cards=${firstPile}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;
      });

      // Assertion to make sure the piles is correct
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/firstPile/list/`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;

        const firstPileCardResponse = response.body.piles.firstPile.cards
          .flat()
          .map((card) => card.code);

        expect(firstPileCardResponse.toString()).to.be.equal(firstPile);
      });

      // Create another pile of 5 cards
      const secondPile = "AD,2D,3D,4D,5D";
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/secondPile/add/?cards=${secondPile}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;
      });

      // Assertion to make sure the piles is correct
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/secondPile/list/`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;

        const secondPileCardResponse = response.body.piles.secondPile.cards
          .flat()
          .map((card) => card.code);

        expect(secondPileCardResponse.toString()).to.be.equal(secondPile);
      });

      // Shuffle first pile
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/firstPile/shuffle/`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;
      });

      // Assertion to make sure the piles is correct
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/firstPile/list/`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;
        expect(response.body.piles.firstPile.cards);

        const firstPileCardShuffledResponse =
          response.body.piles.firstPile.cards.flat().map((card) => card.code);

        expect(firstPileCardShuffledResponse.toString()).not.equal(firstPile);
      });

      // Draw 3 cards from first pile
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/firstPile/draw/?count=3`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;
        expect(response.body.piles.firstPile.remaining).to.be.equal(2);
      });

      // Draw 2 cards from second pile
      cy.request({
        method: "GET",
        url: `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/secondPile/draw/?count=2`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.deck_id).to.be.equal(deckId);
        expect(response.body.success).to.be.true;
        expect(response.body.piles.secondPile.remaining).to.be.equal(3);
      });
    });
  });
});
