class LoginPage{

    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    }

    Username(username){
        cy.get('#user-name').clear().type(username)
    }

    Password(password){
        cy.get('#password').clear().type(password)
    }

    LogIn(){
        cy.get('#login-button').submit()
    }
}

export default LoginPage