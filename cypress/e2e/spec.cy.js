describe('Sauce Demo - Login Test', () => {
  it('Should open the application and log in with valid credentials', () => {
    // Visit the Sauce Demo website
    cy.visit('https://www.saucedemo.com/', { timeout: 120000 }); // Increase timeout to accommodate loading time

    // Enter username
    cy.get('[data-test="username"]').type('standard_user');

    // Enter password
    cy.get('[data-test="password"]').type('secret_sauce');

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Verify successful login by checking the presence of the products page
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });
});
