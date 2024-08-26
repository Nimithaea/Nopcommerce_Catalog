///< reference types='cypress' />

import LoginPage from "../pages/loginPage";

describe('Login to saucedemo App',()=> {

    const login = new LoginPage

    it('Enter Valid User credentials',()=> {

        cy.visit('https://www.saucedemo.com/' , { failOnStatusCode: false });
        login.Username('standard_user')
        login.Password('secret_sauce')
        login.LogIn()      
       
    })
})