declare module 'react-native-credit-card-input' {
  export type CardInput = {
    valid: boolean;
    values: {
      number: string;
      expiry: string;
      cvc: string;
      type:
        | null
        | 'visa'
        | 'master-card'
        | 'american-express'
        | 'diners-club'
        | 'discover'
        | 'jcb'
        | 'unionpay'
        | 'maestro';
      name: string;
      postalCode: string;
    };
    status: {
      number: 'incomplete' | 'invalid' | 'valid';
      expiry: 'incomplete' | 'invalid' | 'valid';
      cvc: 'incomplete' | 'invalid' | 'valid';
      name: 'incomplete' | 'invalid' | 'valid';
      postalCode: 'incomplete' | 'invalid' | 'valid';
    };
  };

  export const LiteCreditCardInput: unknown;
}
