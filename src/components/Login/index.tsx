import React from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";

import Spinner from "components/shared/LoadingSpinner";
import InputField from "components/shared/InputField";
import Button from "components/shared/Button";
import Text from "components/shared/Text";

import useCookies from "hooks/useCookies";

import fetchBff from "utils/fetchUtils";

import {
  Container,
  Card,
  HeadingText,
  ButtonSpace,
  Space,
  GoToLink,
} from "./styles";

type Errors = {
  email?: string;
  password?: string;
};

interface LoginResponse {
  status: "SUCCESS" | 400;
  data: {
    id: string;
    username: string;
    accessToken: string;
    refreshToken: string;
    msg: string;
  };
}

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const router = useRouter();
  const [
    ,
    { setJsonAccessToken, setJsonRefreshToken, setUserInfo },
  ] = useCookies();

  return (
    <Container>
      <Card>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setErrors, setSubmitting }) => {
            try {
              const [, body] = await fetchBff<LoginResponse>(
                { path: "/users/login", method: "POST" },
                undefined,
                values
              );

              if (body.status === 400) {
                throw new Error(body.data.msg);
              } else {
                setUserInfo({ username: body.data.username, id: body.data.id });
                setJsonAccessToken(body.data.accessToken);
                setJsonRefreshToken(body.data.refreshToken);
                router.push("/");

                setSubmitting(false);
              }
            } catch (error) {
              setErrors({
                email: error.message,
              });
            }
          }}
          validate={(values) => {
            const errors: Errors = {};

            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Indirizzo email non valido";
            }

            if (values.password.length < 8) {
              errors.password = "Password troppo corta";
            }

            return errors;
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors, handleBlur, handleChange, isSubmitting, values }) => (
            <Form>
              <HeadingText>
                <Text as="h1" color="primary" textSize={16}>
                  Accedi al tuo account
                </Text>
              </HeadingText>
              <InputField
                error={!!errors.email}
                errorMessage={errors.email}
                label="Email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Indirizzo email"
                type="email"
                value={values.email}
              />
              <Space show={!!errors.email} />
              <InputField
                error={!!errors.password}
                errorMessage={errors.password}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                value={values.password}
              />
              <Space show={!!errors.password} />
              {isSubmitting ? (
                <ButtonSpace>
                  <Button fullWidth icon={<Spinner />} />
                </ButtonSpace>
              ) : (
                <ButtonSpace>
                  <Button
                    disabled={isSubmitting}
                    fullWidth
                    text="Accedi"
                    type="submit"
                  />
                </ButtonSpace>
              )}
              <GoToLink href="/register">
                <Text textSize={10} color="primary">
                  Oppure crea un account
                </Text>
              </GoToLink>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default Login;
