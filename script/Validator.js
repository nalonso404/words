'use strict';

class Validator {
  constructor() {
    this.invalidEmailError = 'Introduce un email válido';
    this.repeatEmailError = 'Ese email ya está en uso';
    this.passwordError = 'Introduce una contraseña de al menos 6 carácteres';
    this.repeatPassError = 'Los campos no coinciden';
    this.invalidPhone ='Introduce un número de teléfono válido';

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPassError: this.repeatPassError,
      invalidPhone:this.invalidPhone
    }
  }

  validateValidEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      delete this.errors.invalidEmailError;
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
    return this.errors;
  }
//AFEGIT VALIDACIÓ NUMBER PHONE
  validatePhone=(phone) =>{
  
    if(/^[679]{1}[0-9]{8}$/.test(phone)){
      delete this.errors.invalidPhone;
    } else{
      this.errors.invalidPhone= this.invalidPhone;
    }
    return this.errors
  }

  validateUniqueEmail = (newEmail) => {
    //recoger datos de localStorage
    const userDB = JSON.parse(localStorage.getItem('users'));
    console.log(userDB)

    if (!userDB) {
      delete this.errors.repeatEmailError;
      return this.errors;
    }

    let mailUnique = true;
    userDB.forEach(user => {
      if (user.email === newEmail) {
        mailUnique = false;
      }
    });

    if (mailUnique) {
      delete this.errors.repeatEmailError;
    } else {
      this.errors.repeatEmailError = this.repeatEmailError;
    }
    return this.errors;
  }

  validatePassword = (password) => {
    if (password.length > 5) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
    return this.errors;
  }

  validatePasswordRepeat = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      delete this.errors.repeatPassError;
    } else {
      this.errors.repeatPassError = this.repeatPassError;
    }

    return this.errors;
  }

  checkErrors = (isSubmitted) => {
    if (isSubmitted) {
      this.errors = {
        invalidEmailError: this.invalidEmailError,
        passwordError: this.passwordError,
        repeatPassError: this.repeatPassError
      }
    }
    return this.errors;
  }
}

const validator = new Validator;