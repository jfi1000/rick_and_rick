export default function validation(input) {
    // Expresión regular para validar password
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    // Expresión regular para validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {};
    // Validar password
    
    if (!regexPassword.test(input.password)) {
        errors.password= 'Error: El password no cumple con los requerimientos mínimos.';
    }
    
    // Validar email
    if (!regexEmail.test(input.email)) {
        errors.email= 'Error: El email no tiene un formato válido.';
    }
    
    return errors;
    
}