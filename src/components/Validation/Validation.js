export default (data) => {
    let errors = {};

    if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.e1 = 'Email is not a valid email address';
    }
    if (!data.email) {
        errors.e2 = 'Insert email'
    }
    if (data.email.length > 35) {
        errors.e3 = 'El email debe contener menos de 35 caracteres'
    }
    if (!/\d/.test(data.password)) {
        errors.p1 = "Al menos debe tener un numero!"
    }
    if (data.password.length <6 || data.password.length>10) {
        errors.p2 = 'Longitud Incorrecta'
    }
    return errors;
};