/* eslint-disable */
declare module 'tipsi-stripe' {
  type InitModule = {
    publishableKey: string;
    androidPayMode?: string;
    merchantId?: string;
  };

  export type Card = {
    number: string;
    expMonth: number;
    expYear: number;
    cvc: string;
  };

  type Token = {
    card: {
      brand: string;
      cardId: string;
      country: string;
      expMonth: number;
      expYear: number;
      funding: string;
      isApplePayCard: boolean;
      last4: string;
    };
    created: number;
    livemode: boolean;
    tokenId: string;
  };

  const stripe = {
    setOptions: (init: InitModule): Promise<void> => {},
    createTokenWithCard: (card: Card): Promise<Token> => {},
  };

  export default stripe;

  export type Errors = {
    generate: typeof StripeError.generate;
    StripeError: typeof StripeError;
    StripeCardError: typeof StripeCardError;
    StripeInvalidRequestError: typeof StripeInvalidRequestError;
    StripeAPIError: typeof StripeAPIError;
    StripeAuthenticationError: typeof StripeAuthenticationError;
    StripePermissionError: typeof StripePermissionError;
    StripeRateLimitError: typeof StripeRateLimitError;
    StripeConnectionError: typeof StripeConnectionError;
    StripeSignatureVerificationError: typeof StripeSignatureVerificationError;
    StripeIdempotencyError: typeof StripeIdempotencyError;
    StripeInvalidGrantError: typeof StripeInvalidGrantError;
  };

  export type RawErrorType =
    | 'card_error'
    | 'invalid_request_error'
    | 'api_error'
    | 'idempotency_error'
    | 'rate_limit_error'
    | 'authentication_error'
    | 'invalid_grant';

  export type StripeRawError = {
    message?: string;

    type: RawErrorType;

    headers?: { [header: string]: string };
    statusCode?: number;
    requestId?: string;

    code?: string;
    doc_code?: string;
    decline_code?: string;
    param?: string;
    detail?: string;

    charge?: string;
    payment_intent?: Stripe.PaymentIntent;
    payment_method?: Stripe.PaymentMethod;
    setup_intent?: Stripe.SetupIntent;
    source?: Stripe.Source;
  };

  class StripeError extends Error {
    /**
     * A human-readable message giving more details about the error. For card errors, these messages can
     * be shown to your users.
     */
    readonly message: string;

    readonly type: keyof Errors;

    /**
     * See the "error types" section at https://stripe.com/docs/api/errors
     */
    readonly rawType: RawErrorType;

    /**
     * For card errors, a short string describing the kind of card error that occurred.
     *
     * @docs https://stripe.com/docs/error-codes
     */
    readonly code?: string;

    /**
     * A URL to more information about the error code reported.
     *
     * @docs https://stripe.com/docs/error-codes
     */
    readonly doc_url?: string;

    /**
     * Typically a 4xx or 5xx.
     */
    readonly statusCode?: number;

    readonly raw: unknown;

    readonly headers: {
      [key: string]: string;
    };

    readonly requestId: string;

    /**
     * The parameter the error relates to if the error is parameter-specific. You can use this to display a
     * message near the correct form field, for example.
     */
    readonly param?: string;

    /** @deprecated */
    readonly detail?: unknown;

    readonly charge?: string;
    readonly decline_code?: string;
    readonly payment_intent?: PaymentIntent;
    readonly payment_method?: PaymentMethod;
    readonly payment_method_type?: string;
    readonly setup_intent?: SetupIntent;
    readonly source?: Source;
  }

  /**
   * Card errors are the most common type of error you should expect to handle.
   * They result when the user enters a card that can't be charged for some reason.
   */
  class StripeCardError extends StripeError {
    readonly type: 'StripeCardError';
    readonly rawType: 'card_error';

    /**
     * @docs https://stripe.com/docs/declines/codes
     */
    readonly decline_code: string;
  }

  /**
   * Invalid request errors arise when your request has invalid parameters.
   */
  class StripeInvalidRequestError extends StripeError {
    readonly type: 'StripeInvalidRequestError';
    readonly rawType: 'invalid_request_error';
  }

  /**
   * API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers),
   * and are extremely uncommon.
   *
   * It could also be raised in the case that a new error has been introduced in the API,
   * but this version of the library doesn't know how to handle it.
   */
  class StripeAPIError extends StripeError {
    readonly type: 'StripeAPIError';
    readonly rawType: 'api_error';
  }

  /**
   * Failure to properly authenticate yourself in the request.
   */
  class StripeAuthenticationError extends StripeError {
    readonly type: 'StripeAuthenticationError';
    readonly rawType: 'authentication_error';
  }

  /**
   * Access was attempted on a resource that wasn't allowed.
   */
  class StripePermissionError extends StripeError {
    readonly type: 'StripePermissionError';
  }

  /**
   * Too many requests hit the API too quickly.
   * @docs https://stripe.com/docs/rate-limits
   */
  class StripeRateLimitError extends StripeError {
    readonly type: 'StripeRateLimitError';
    readonly rawType: 'rate_limit_error';
  }

  /**
   * The library cannot connect to Stripe.
   * This can happen for a variety of reasons,
   * such as loss of network connectivity or a bad TLS certificate.
   */
  class StripeConnectionError extends StripeError {
    readonly type: 'StripeConnectionError';
  }

  /**
   * The signature verification for a webhook failed.
   * @docs https://stripe.com/docs/webhooks/signatures
   */
  class StripeSignatureVerificationError extends StripeError {
    readonly type: 'StripeSignatureVerificationError';
  }

  /**
   * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
   * @docs https://stripe.com/docs/api/idempotent_requests?lang=node
   */
  class StripeIdempotencyError extends StripeError {
    readonly type: 'StripeIdempotencyError';
    readonly rawType: 'idempotency_error';
  }

  /**
   * InvalidGrantError is raised when a specified code doesn't exist, is
   * expired, has been used, or doesn't belong to you; a refresh token doesn't
   * exist, or doesn't belong to you; or if an API key's mode (live or test)
   * doesn't match the mode of a code or refresh token.
   */
  class StripeInvalidGrantError extends StripeError {
    readonly type: 'StripeInvalidGrantError';
    readonly rawType: 'invalid_grant';
  }

  export type GeneratedErrors =
    | StripeCardError
    | StripeInvalidRequestError
    | StripeAPIError
    | StripeAuthenticationError
    | StripePermissionError
    | StripeRateLimitError
    | StripeConnectionError
    | StripeInvalidGrantError
    | StripeIdempotencyError
    | StripeSignatureVerificationError;

  export interface Charge {
    type: 'Charge';
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'charge';

    alternate_statement_descriptors?: Charge.AlternateStatementDescriptors;

    /**
     * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;

    /**
     * Amount in %s captured (can be less than the amount attribute on the charge if a partial capture was made).
     */
    amount_captured: number;

    /**
     * Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
     */
    amount_refunded: number;

    /**
     * ID of the Connect application that created the charge.
     */
    application: string | Stripe.Application | null;

    /**
     * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
     */
    application_fee: string | Stripe.ApplicationFee | null;

    /**
     * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
     */
    application_fee_amount: number | null;

    /**
     * Authorization code on the charge.
     */
    authorization_code?: string;

    /**
     * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
     */
    balance_transaction: string | Stripe.BalanceTransaction | null;

    billing_details: Charge.BillingDetails;

    /**
     * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined.
     */
    calculated_statement_descriptor: string | null;

    /**
     * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
     */
    captured: boolean;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * ID of the customer this charge is for if one exists.
     */
    customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
     */
    destination: string | Stripe.Account | null;

    /**
     * Details about the dispute if the charge has been disputed.
     */
    dispute: string | Stripe.Dispute | null;

    /**
     * Whether the charge has been disputed.
     */
    disputed: boolean;

    /**
     * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
     */
    failure_code: string | null;

    /**
     * Message to user further explaining reason for charge failure if available.
     */
    failure_message: string | null;

    /**
     * Information on fraud assessments for the charge.
     */
    fraud_details: Charge.FraudDetails | null;

    /**
     * ID of the invoice this charge is for if one exists.
     */
    invoice: string | Stripe.Invoice | null;

    level3?: Charge.Level3;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata;

    /**
     * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
     */
    on_behalf_of: string | Stripe.Account | null;

    /**
     * ID of the order this charge is for if one exists.
     */
    order: string | Stripe.Order | null;

    /**
     * Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
     */
    outcome: Charge.Outcome | null;

    /**
     * `true` if the charge succeeded, or was successfully authorized for later capture.
     */
    paid: boolean;

    /**
     * ID of the PaymentIntent associated with this charge, if one exists.
     */
    payment_intent: string | Stripe.PaymentIntent | null;

    /**
     * ID of the payment method used in this charge.
     */
    payment_method: string | null;

    /**
     * Details about the payment method at the time of the transaction.
     */
    payment_method_details: Charge.PaymentMethodDetails | null;

    /**
     * This is the email address that the receipt for this charge was sent to.
     */
    receipt_email: string | null;

    /**
     * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
     */
    receipt_number: string | null;

    /**
     * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
     */
    receipt_url: string | null;

    /**
     * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
     */
    refunded: boolean;

    /**
     * A list of refunds that have been applied to the charge.
     */
    refunds: ApiList<Stripe.Refund>;

    /**
     * ID of the review associated with this charge if one exists.
     */
    review: string | Stripe.Review | null;

    /**
     * Shipping information for the charge.
     */
    shipping: Charge.Shipping | null;

    /**
     * This is a legacy field that will be removed in the future. It contains the Source, Card, or BankAccount object used for the charge. For details about the payment method used for this charge, refer to `payment_method` or `payment_method_details` instead.
     */
    source: Stripe.CustomerSource | null;

    /**
     * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    source_transfer: string | Stripe.Transfer | null;

    /**
     * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor: string | null;

    /**
     * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix: string | null;

    /**
     * The status of the payment is either `succeeded`, `pending`, or `failed`.
     */
    status: string;

    /**
     * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
     */
    transfer?: string | Stripe.Transfer;

    /**
     * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    transfer_data: Charge.TransferData | null;

    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
     */
    transfer_group: string | null;
  }
}
