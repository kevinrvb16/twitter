import validateEmail from "./validateEmail"

export default function validateCreateAccountFields(
    name: string, 
    username: string, 
    email: string, 
    password: string
) {
    if(name === '' || username === '' || email === '' || password === '') {
        return 'Você deve preencher todos os campos'
    }

    if(password.length < 8) {
        return 'A denha deve ter no mínimo 8 caracteres'
    }
    if(!validateEmail(email)) {
        return 'E-mail inválido'
    }
    
    return true
}
