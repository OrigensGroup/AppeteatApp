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
    goBack: 'Go Back to Log In',
    resetPassword: 'Reset password',
    cta: 'Forgot password?',
    label: 'Email to send password reset',
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
    label: 'Username must be 4 chartacters long',
  },
  passwordLenghtError: {
    label: 'Password must be at least 8 digits long',
  },
  confirmPasswordError: {
    label: 'Passwords do not match',
  },
  passwordRequiredError: {
    label: 'Password is required',
  },
  invalidPasswordError: {
    label: 'Password must contain at least 1 letter and 1 number',
  },
  emailAlreayInUse: {
    label: 'That email address is already in use!',
  },
  tooManyRequests: {
    label:
      'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
  },
  emailError: {
    label: 'Email must not be empty',
  },
  passwordError: {
    label: 'Password must not be empty',
  },
};

export default loginTranslations;
