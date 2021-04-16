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
    label: 'OR',
  },
  registerButton: {
    label: 'Registrati',
  },
  signUpSection: {
    label: 'Non hai un account?',
    buttonLabel: 'Create New Account',
  },
  anonSection: {
    label: 'Continue without an account',
    buttonLabel: 'Registrati  > ',
  },
  signInSection: {
    label: 'Hai giá un account?',
    buttonLabel: 'Already have an account?',
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
    message: "The email address that you've entered doesn't appear to be of a valid format. Please try again.",
  },
  emailSent: {
    label: 'Password Reset',
    message: 'The link to reset your password has been sent to your email.',
  },
  errorWrongPasswordSignIn: {
    label: 'Incorrect password',
    message: "The password that you've entered is incorrect. Please try again.",
  },
  errorUserNotFound: {
    label: 'Incorrect email address',
    message:
      "The email address that you've entered doesn't appear to belong to an account. Please check your email address and try again.",
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
