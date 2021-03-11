const loginTranslations = {
  nameField: {
    label: 'Full Name',
    placeholder: 'Name Surname',
  },
  emailField: {
    label: 'E-mail',
    placeholder: 'mail@mail.com',
  },
  passwordField: {
    label: 'Password',
    secondaryLabel: 'Reinsert password',
    placeholder: '********',
  },
  loginButton: {
    label: 'Log In',
  },
  RegisterButton: {
    label: 'Registrati',
  },
  signUpSection: {
    label: 'Non hai ancora un account?',
    buttonLabel: 'Registrati  > ',
  },
  SignInSection: {
    label: 'Hai giá un account?',
    buttonLabel: 'Accedi  > ',
  },

  //SignIn Errors
  errorSignInEmail: {
    label: 'That email address is invalid!',
  },
  errorWrongPasswordSignIn: {
    label: 'Email or password invalid',
  },

  //SignUp Errors
  usernameError: {
    label: 'Username must be 4 chartacters long',
  },
  passwordLenghtError: {
    label: 'Password must be at least 8 digits long',
  },
  confirmPasswordError: {
    label: 'Passwords do not match',
  },
  invalidPasswordError: {
    label: 'Password must contain at least 1 letter and 1 number',
  },
  emailAlreayInUse: {
    label: 'That email address is already in use!',
  },
};

export default loginTranslations;
