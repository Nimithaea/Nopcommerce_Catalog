
import LoginPage from "../pages/loginPage"

describe('Nopcommerce Login', ()=>{

    it('Nopcommerse app testing', ()=>{

      const login = new LoginPage()

        cy.visit('http://nimithatest-001-site1.ctempurl.com/admin', {
            auth: {
              username: '11190286',
              password: '60-dayfreetrial',
            }
            })

            cy.get('.header-links').contains("Log in").click()
            cy.get('.email').type('nimithaea@gmail.com')
            cy.get('#Password').type('nimithacypress')
            cy.get('.master-wrapper-page').find('.button-1 login-button').click()
            //cy.get('.buttons').click()//cy.get('body')
            //login.visit()
            //login.Username('admin@yourstore.com')
            //login.Password('admin')
            //login.LogIn()
        
    })
})