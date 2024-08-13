///< reference types='cypress' />

import LoginPage from "../pages/loginPage";

describe('Login to saucedemo App',()=> {

    const login = new LoginPage

    it('Enter Valid User credentials',()=> {

        cy.visit('https://www.saucedemo.com/' , { failOnStatusCode: false });
        login.Username('admin@yourstore.com')
        login.Password('admin')
        login.LogIn       
       
    })
})