class LoginPage{

    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    }

    LoginEmail(email){
        cy.get('#Email').clear().type(email)
    }

    LoginPwd(password){
        cy.get('#Password').clear().type(password)
    }

    LogIn(){
        cy.get('.button-1 login-button').submit()
    }
}

export default LoginPage