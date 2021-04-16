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
  orSeparator: {
    label: 'oppure',
  },
  registerButton: {
    label: 'Registrati',
  },
  signUpSection: {
    label: 'Non hai un account?',
    buttonLabel: 'Crea un nuovo account',
  },
  anonSection: {
    label: 'Continua senza account',
    buttonLabel: 'Registrati  > ',
  },
  signInSection: {
    label: 'Hai giá un account?',
    buttonLabel: 'Hai giá un account?',
  },
  forgotPassword: {
    goBack: 'Indietro',
    resetPassword: 'Resetta password',
    cta: 'Password dimenticata',
    label: 'Email del login',
    placeholder: 'mail@mail.com',
  },

  // SignIn Errors
  errorSignInEmail: {
    label: 'Incorrect email address',
    message: "L'indirizzo email inserito non sembra corretto. Riprova",
  },
  emailSent: {
    label: 'Resetta password',
    message: 'Il link per resettare la password è stato mandato',
  },
  errorWrongPasswordSignIn: {
    label: 'Password incorretta',
    message: 'La password inserita non sembra essere corretta. Riprova.',
    // The password that you've entered is incorrect. Please try again.
  },
  errorUserNotFound: {
    label: 'Indirizzo email invalido',
    message:
      "L'indirizzo email inserita non sembra essere associato a nessun account. Controlla l'indirizzo mail e riprova",
  },

  // SignUp Errors
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
    label: 'La password deve contenere almeno un numero e una lettera e una lettera maiuscola',
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
