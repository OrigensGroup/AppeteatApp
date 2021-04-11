const loginTranslations = {
  nameField: {
    label: 'Nome',
    placeholder: 'Nome cognome',
  },
  emailField: {
    label: 'E-mail',
    placeholder: 'mail@mail.com',
  },
  passwordField: {
    label: 'Password',
    secondaryLabel: 'Conferma password',
    placeholder: '********',
  },
  loginButton: {
    label: 'Log In',
  },
  registerButton: {
    label: 'Registrati',
  },
  signUpSection: {
    label: 'Non hai ancora un account?',
    buttonLabel: 'Registrati  > ',
  },
  signInSection: {
    label: 'Hai giá un account?',
    buttonLabel: 'Accedi  > ',
  },
  forgotPassword: {
    goBack: 'Indietro',
    resetPassword: 'Resetta password',
    cta: 'Password dimenticata',
    label: 'Email del login',
    placeholder: 'mail@mail.com',
  },

  //SignIn Errors
  errorSignInEmail: {
    label: 'Indirizzo email invalido',
  },
  errorWrongPasswordSignIn: {
    label: 'Password o email invalidi',
  },

  //SignUp Errors
  usernameError: {
    label: 'Username deve essere maggiore di 4 caratteri',
  },
  passwordLenghtError: {
    label: 'Passoword maggiore di 8 caratteri',
  },
  confirmPasswordError: {
    label: 'Le password non combaciano',
  },
  passwordRequiredError: {
    label: 'Password è obbligatoria',
  },
  invalidPasswordError: {
    label: 'La password deve contenere almeno un numero e una lettera',
  },
  emailAlreayInUse: {
    label: 'Indirzzo email invalido',
  },
  tooManyRequests: {
    label: 'Accesso disabilitato troppi accessi effetutati per lo stesso account',
  },
  emailError: {
    label: 'Email non può essere vuota',
  },
  passwordError: {
    label: 'Password non può essere vuota',
  },
};

export default loginTranslations;
