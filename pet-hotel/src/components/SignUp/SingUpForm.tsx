import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import MyTextField from '../FormFields/MyTextField';
import './SingUpForm.css';
import MyCheckboxButton from '../FormFields/MyCheckboxButton';
import { Button, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import logo from '../../images/logoCat.jpg';
import { registerOwner } from '../../services/ownerService';
import { Owner } from '../../interfaces/Owner';

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

const SingUpForm: React.FC = () => {
  return (
    <>
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
        onSubmit={async (data, onSubmitProps) => {
          let mydata: Owner = await registerOwner(data);
          if (typeof mydata !== 'undefined') {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
          } else {
            console.error('data is undefined');
          }
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

              <section>
                <MyCheckboxButton name="termsAndConditions" color="success" />I
                accept the &nbsp;
                <Link
                  href="https://www.britannica.com/animal/cat://digilent.com/"
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
              <section>
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

export default SingUpForm;
