
import LoginPage from "../pages/loginPage"

describe('Nopcommerce Login', ()=>{

    it('Nopcommerse app testing', ()=>{

      const login = new LoginPage()

        cy.visit('http://nimithatest-001-site1.ctempurl.com', {
            auth: {
              username: '11190286',
              password: '60-dayfreetrial',
            }
            })
            //login.visit()
            login.Username('admin@yourstore.com')
            login.Password('admin')
            login.LogIn()
        
    })
})