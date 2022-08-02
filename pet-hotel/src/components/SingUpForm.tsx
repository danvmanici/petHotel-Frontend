import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import MyTextField from './FormFields/MyTextField';
import './SingUpForm.css';
import MyCheckboxButton from './FormFields/MyCheckboxButton';
import { Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import logo from '../images/logoCat.jpg';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is a required field!')
    .max(10)
    .min(3),
  lastName: yup
    .string()
    .required('Last name is a required field!')
    .max(10)
    .min(3),
  email: yup.string().email().required('Email is a required field!'),
  password: yup
    .string()
    .required('Password is a required field!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  termsAndConditions: yup
    .bool()
    .oneOf([true], 'Please accept the terms and conditions!'),
});

const SingUp: React.FC = () => {
  return (
    <>
      <div className="custom-shape-divider-top-1659101695">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Formik
        validateOnChange={true}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          termsAndConditions: false,
          updatesAndOffers: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(data, onSubmitProps) => {
          console.log(data);
          onSubmitProps.setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting, isValid, touched }) => (
          <Form className="singUpForm shadow-xl border-none rounded-lg">
            <section className="singUpForm__header">
              <span>
                <p className="singUpForm__header__textSingUp">Sing up</p>
                <p>Pet Hotel</p>
              </span>
              <img src={logo} alt="logo" width="60px" />
            </section>
            <section className="singUpForm__content">
              <MyTextField
                name="firstName"
                label="First name"
                variant="outlined"
                margin="dense"
              />
              <MyTextField
                name="lastName"
                label="Last name"
                variant="outlined"
                margin="dense"
              />
              <MyTextField
                name="email"
                label="Email"
                variant="outlined"
                margin="dense"
              />
              <MyTextField
                name="password"
                label="Password"
                variant="outlined"
                margin="dense"
                type="password"
              />
              <MyTextField
                name="confirmPassword"
                label="Confirm password"
                variant="outlined"
                margin="dense"
                type="password"
              />
              <section className="singUpForm__content__socialButtons">
                <Button
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  style={{
                    backgroundColor: 'red',
                    fontSize: '0.6rem',
                    textTransform: 'capitalize',
                    padding: '0.25rem',
                    paddingLeft: '0.6rem',
                    paddingRight: '0.6rem',
                  }}
                >
                  Sign up with Google
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  style={{
                    backgroundColor: 'grey',
                    fontSize: '0.6rem',
                    textTransform: 'capitalize',
                    padding: '0.25rem',
                    paddingLeft: '0.65rem',
                    paddingRight: '0.65rem',
                  }}
                >
                  Sign up with GitHub
                </Button>
                <Button
                  variant="contained"
                  startIcon={<FacebookRoundedIcon />}
                  style={{
                    fontSize: '0.6rem',
                    textTransform: 'capitalize',
                    padding: '0.25rem',
                    paddingLeft: '0.65rem',
                  }}
                >
                  Sign up with Facebook
                </Button>
              </section>
              <section className="singUpForm__content__termsAndConditions-updatesAndOffers-updatesAndOffers">
                <MyCheckboxButton name="termsAndConditions" color="success" />I
                accept the &nbsp;
                <Link
                  href="https://digilent.com/"
                  style={{ textDecoration: 'none' }}
                >
                  Terms and Conditions
                </Link>
                {errors.termsAndConditions && touched.termsAndConditions && (
                  <p style={{ color: 'red' }}>
                    &nbsp;&nbsp;&nbsp;{errors.termsAndConditions}
                  </p>
                )}
              </section>
              <section className="singUpForm__content__termsAndConditions-updatesAndOffers-updatesAndOffers">
                <MyCheckboxButton name="updatesAndOffers" color="success" />I
                would like to receive updates and offers.
              </section>

              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || isSubmitting}
                fullWidth
                style={{
                  backgroundColor: 'green',
                  lineHeight: '1.25rem',
                  marginTop: '0.75rem',
                  textTransform: 'capitalize',
                }}
              >
                Sing up
              </Button>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SingUp;
