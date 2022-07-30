import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import MyTextField from './FormFields/MyTextField';
import './SingUpForm.css';

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
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
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log('submit: ', data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className="singUpForm shadow-xl border-none rounded-lg">
            <MyTextField
              name="firstName"
              label="First Name"
              variant="standard"
              margin="dense"
              size="small"
            />
            <MyTextField
              name="lastName"
              label="Last Name"
              variant="standard"
              margin="dense"
              size="small"
            />
            <MyTextField
              name="email"
              label="Email"
              variant="standard"
              margin="dense"
              size="small"
            />
            <MyTextField
              name="password"
              label="Password"
              variant="standard"
              margin="dense"
              size="small"
            />
            <MyTextField
              name="confirmPassword"
              label="Confirm Password"
              variant="standard"
              margin="dense"
              size="small"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full my-4"
            >
              SingUp
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SingUp;
