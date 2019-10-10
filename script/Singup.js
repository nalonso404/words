'use strict';

class Signup {
  constructor() {
    this.nameInput = document.querySelector('#name');
    this.surnameInput = document.querySelector('#surname');
    this.dobInput = document.querySelector('#dob');
    this.cityInput = document.querySelector('#city');
    this.phoneInput = document.querySelector('#phone');
    this.emailInput = document.querySelector('#email');
    this.passwordInput = document.querySelector('#password');
    this.repeatPasswordInput = document.querySelector('#repeat-password');
    this.buttonInput = document.querySelector('#signup-button');
    this.errorsWrapper = document.querySelector('.errors-container');
  }


  saveData = (event) => {
    event.preventDefault() 
    //recoger valores de inputs
    const name = this.nameInput.value;
    const surname = this.surnameInput.value;
    const dob = this.dobInput.value;
    const city = this.cityInput.value;
    const phone = this.phoneInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    //crear una instancia de User
    const newUser = new User(name,surname,dob,email,city,phone,password);
    //console.log(newUser)

    //almacenar datos en local storage
    let usersDB = JSON.parse(localStorage.getItem('users')); //recogemos del local storage

    if (usersDB) {  //miro si hay usuarios registrados
      usersDB.push(newUser); //añado a la lista
    } else {
      usersDB = [newUser]; //asigno un array con mi usuario
    }
    localStorage.setItem('users', JSON.stringify(usersDB)); //envío a localStorage mi base de datos

    //vaciar formulario
    this.nameInput.value = '';
    this.surnameInput.value = '';
    this.dobInput.value = '';
    this.cityInput.value = '';
    this.phoneInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';

    validator.checkErrors(true);
  }

  handleInputsValues = () => {
    //comprobar los datos de inputs y validarlos
    this.emailInput.addEventListener('input', event => {
      const errors = validator.validateValidEmail(event.target.value)
      if (!('invalidEmailError' in errors)) {
        validator.validateUniqueEmail(event.target.value)
      }
      this.handleErrorMessages();
      this.handleIsValid();
    })
    this.passwordInput.addEventListener('input', event => {
      validator.validatePassword(event.target.value);
      validator.validatePasswordRepeat(event.target.value, this.repeatPasswordInput.value);
      this.handleErrorMessages();
      this.handleIsValid();
    })
    this.repeatPasswordInput.addEventListener('input', event => {
      const errors = validator.validatePasswordRepeat(this.passwordInput.value, event.target.value);
      this.handleErrorMessages();
      this.handleIsValid();
    })
//afegit per phone number
    this.phoneInput.addEventListener('input',event =>{
      const errors = validator.validatePhone(event.target.value);
      this.handleErrorMessages();
      this.handleIsValid();
    })
  
  }

  handleErrorMessages = () => {
    this.errorsWrapper.innerHTML = '';
    //mostrar mensajes de error en HTML si los hay
    const errors = validator.checkErrors()
    for (const prop in errors) {
      const error = document.createElement('p');
      error.innerHTML = errors[prop];
      this.errorsWrapper.appendChild(error);
    }
  }
  handleIsValid = () => {
    //activar o desactivar botón del form en función de si hay o no errores
    const errors = validator.checkErrors();
    if (Object.keys(errors).length === 0) { //no hay errores
      this.buttonInput.removeAttribute("disabled");
    } else {
      this.buttonInput.setAttribute('disabled', '');
    }
  }
}

const signup = new Signup();
window.addEventListener('load', signup.handleInputsValues);