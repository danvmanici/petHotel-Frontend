import { TextField } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

const MyTextField: React.FC<FieldAttributes<{}>> = ({ ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      placeholder={props.placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default MyTextField;
