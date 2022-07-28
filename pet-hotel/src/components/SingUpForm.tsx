import React from 'react';
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray,
} from 'formik';
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
} from '@mui/material';
import * as yup from 'yup';
import MyTextField from './FormFields/MyTextField';
import MyRadioField from './FormFields/MyRadioButton';
import MyCheckboxButton from './FormFields/MyCheckboxButton';

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required(),
    })
  ),
});

const SingUp: React.FC = () => {
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          firstName: '',
          lastName: '',
          isTall: false,
          cookies: [],
          yogurt: '',
          pets: [{ type: 'cat', name: 'jarvis', id: '' + Math.random() }],
        }}
        validationSchema={validationSchema}
        // validate={values => {
        //   const errors: Record<string, string> = {};

        //   if (values.firstName.includes("bob")) {
        //     errors.firstName = "no bob";
        //   }

        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log('submit: ', data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <MyTextField placeholder="first name" name="firstName" />
            <div>
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <MyCheckboxButton name="isTall" type="checkbox" label="isTall" />
            <div>cookies:</div>
            <MyCheckboxButton
              name="cookies"
              type="checkbox"
              value="chocolate chip"
            />
            <MyCheckboxButton
              name="cookies"
              type="checkbox"
              value="snickerdoodle"
            />
            <MyCheckboxButton name="cookies" type="checkbox" value="sugar" />
            <div>yogurt</div>
            <MyRadioField
              name="yogurt"
              type="radio"
              value="peach"
              label="peach"
            />
            <MyRadioField
              name="yogurt"
              type="radio"
              value="blueberry"
              label="blueberry"
            />
            <MyRadioField
              name="yogurt"
              type="radio"
              value="apple"
              label="apple"
            />
            <MyRadioField name="lol" type="radio" value="lol" />
            <FieldArray name="pets">
              {(arrayHelpers) => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: 'frog',
                        name: '',
                        id: '' + Math.random(),
                      })
                    }
                  >
                    add pet
                  </Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyTextField
                          placeholder="pet name"
                          name={`pets.${index}.name`}
                        />
                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="cat">cat</MenuItem>
                          <MenuItem value="dog">dog</MenuItem>
                          <MenuItem value="frog">frog</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          x
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>
            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SingUp;
