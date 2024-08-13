///< reference types='cypress' />

import LoginPage from "../pages/loginPage";

describe('Login to Nopcommerce App',()=> {

    const login = new LoginPage

    it('Enter Valid User credentials',()=> {

        cy.visit('https://admin-demo.nopcommerce.com/login?', { failOnStatusCode: false });
        //cy.get('.cb-lb').check()
        login.LoginEmail('admin@yourstore.com')
        login.LoginPwd('admin')
        login.LogIn       
    })
})